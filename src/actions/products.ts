"use server"

import { cookies } from "next/headers"
import { getUser } from "./user"
import getDB from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { Resend } from 'resend';

export async function addToBasket(id: number) {
    const keksiky = await cookies()
    let kosik = keksiky.get("cart")?.value ?? "[]"

    if (kosik === "") {
        kosik = "[]"
    }

    const basket = JSON.parse(kosik)

    const item = basket.find((item: { id: number, quantity: number }) => item.id === id)

    if (item) {
        item.quantity += 1
        keksiky.set("cart", JSON.stringify(basket), { path: "/" })
        return
    }

    basket.push({
        id: id,
        quantity: 1
    })

    keksiky.set("cart", JSON.stringify(basket), { path: "/" })
}

export async function removeFromBasket(id: number) {
    const keksiky = await cookies()
    let kosik = keksiky.get("cart")?.value ?? "[]"

    if (kosik === "") {
        kosik = "[]"
    }

    const basket = JSON.parse(kosik)

    const item = basket.find((item: { id: number, quantity: number }) => item.id === id)

    if (item) {
        item.quantity -= 1
        keksiky.set("cart", JSON.stringify(basket), { path: "/" })
        if (item.quantity <= 0) {
            basket.splice(basket.indexOf(item), 1)
            keksiky.set("cart", JSON.stringify(basket), { path: "/" })
        }
    }
}

export async function isInFavourites(id: number): Promise<boolean> {
    const db = getDB();
    const user = await getUser();

    if (user == null) {
        return false;
    }

    const favourite = await db
        .selectFrom("favorite_products")
        .where("product_id", "=", id)
        .where("user_id", "=", user.id)
        .selectAll()
        .executeTakeFirst();

    if (favourite) return true

    return false
}

export async function addToFavourites(id: number) {
    const db = getDB();
    const user = await getUser();

    if (user == null) {
        return;
    }

    const favourite = await db
        .selectFrom("favorite_products")
        .where("product_id", "=", id)
        .where("user_id", "=", user.id)
        .selectAll()
        .executeTakeFirst();

    if (favourite) {
        return;
    }

    await db.insertInto("favorite_products").values({ user_id: user.id, product_id: id }).executeTakeFirst();
    revalidatePath("/products")
}

export async function removeFromFavourites(id: number) {
    const db = getDB();
    const user = await getUser();

    if (user == null) {
        return;
    }

    const favourite = await db
        .selectFrom("favorite_products")
        .where("product_id", "=", id)
        .where("user_id", "=", user.id)
        .selectAll()
        .executeTakeFirst();

    if (!favourite) {
        return;
    }

    await db
        .deleteFrom("favorite_products")
        .where("product_id", "=", id)
        .where("user_id", "=", user.id)
        .executeTakeFirst();

    revalidatePath("/products")
}

export async function makeTemporaryOrder(ulica: string, popisne_cislo_domu: string, mesto: string, zip_code: string, krajina: string, telefon: string, email: string, meno: string, priezvisko: string) {
    const keksiky = await cookies()
    let order = keksiky.get("order")?.value ?? ""
    const basket = keksiky.get("cart")?.value ?? "[]"

    if (order != "") {
        keksiky.set("order", "", { path: "/", maxAge: 0 })
    }

    order = JSON.stringify({
        "ulica": ulica,
        "popisne_cislo_domu": popisne_cislo_domu,
        "mesto": mesto,
        "zip_code": zip_code,
        "krajina": krajina,
        "telefon": telefon,
        "email": email,
        "meno": meno,
        "priezvisko": priezvisko,
        "cart": JSON.parse(basket)
    })

    keksiky.set("order", order, { path: "/" })
    console.log("here")
    redirect("/confirmation");
}

export async function makeOrder() {
    const cookieStore = await cookies();
    const orderCookie = cookieStore.get("order")?.value;
    const db = getDB();
    if (!orderCookie) return;
    const order = JSON.parse(orderCookie);

    const user = await getUser();
    let user_id = null;
    if (user) user_id = user.id;

    const result = await db
        .insertInto("orders")
        .values({
            name: order.meno,
            surname: order.priezvisko,
            street: order.ulica,
            house_number: order.popisne_cislo_domu,
            city: order.mesto,
            country: order.krajina,
            zip_code: order.zip_code,
            phone_number: order.telefon,
            email: order.email,
            confirmed: 0,
            user_id: user_id,
        })
        .executeTakeFirst();

    const orderId = Number(result.insertId);

    if (!orderId) {
        return { error: "Failed to create order" };
    }

    let total_price = 0;

    for (const item of order.cart) {
        const product = await db
            .selectFrom("products")
            .where("id", "=", item.id)
            .selectAll()
            .executeTakeFirst();

        if (!product) continue;

        total_price += item.quantity * product.price;

        await db
            .insertInto("order_product")
            .values({
                order_id: orderId,
                product_id: item.id,
                quantity: item.quantity,
            })
            .execute();
    }

    const resend = new Resend(process.env.RESEND_API_KEY!);

    await resend.emails.send({
        from: "PetShop <onboarding@resend.dev>",
        to: order.email,
        subject: "Potvrdenie objednávky",
        html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f1f1a; background-color: #f0f0f0; padding: 40px; margin: 0;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.08);">
            
            <div style="background-color: #22c55e; padding: 20px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Potvrdenie objednávky</h1>
            </div>
    
            <div style="padding: 30px;">
              <p style="font-size: 18px; font-weight: bold; margin-top: 0;">
                Ahoj ${order.meno} ${order.priezvisko},
              </p>
              <p>Ďakujeme za Vašu objednávku v našom obchode. Číslo vašej objednávky je <strong>${orderId}</strong>.</p>
              
              <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px; margin: 20px 0;">
                <p style="margin: 0; color: #4b5563;">Celková suma na zaplatenie:</p>
                <p style="font-size: 24px; font-weight: bold; color: #22c55e; margin: 5px 0;">${total_price / 100} €</p>
              </div>
    
              <h3 style="border-bottom: 2px solid #f0f0f0; padding-bottom: 10px; margin-top: 30px;">Doručovacia adresa</h3>
              <p style="margin-bottom: 0;">
                ${order.ulica} ${order.popisne_cislo_domu}, ${order.mesto}
              </p>
            </div>
    
            <div style="background-color: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #6b7280;">
              <p style="margin: 0;">&copy; 2026 Vaša Stránka. Všetky práva vyhradené.</p>
            </div>
            
          </div>
        </div>
        `,
    });

    cookieStore.delete("cart");
    cookieStore.delete("order");
    redirect("/confirmed");
}

export async function getFavoriteProducts() {
    const db = getDB();
    const user = await getUser();
    if (!user) return [];

    const favorites = await db
        .selectFrom("products")
        .innerJoin("favorite_products", "products.id", "favorite_products.product_id")
        .where("favorite_products.user_id", "=", user.id)
        .selectAll("products")
        .execute();

    return favorites.map(p => ({ ...p, is_in_fav: true }));
}