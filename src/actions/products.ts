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
    revalidatePath("products")
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

    await db.deleteFrom("favorite_products").where("product_id", "=", id).where("user_id", "=", user.id).executeTakeFirst();
    revalidatePath("products")
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
    redirect("/confirmation");
}

export async function makeOrder() {
    const cookieStore = await cookies();
    const orderCookie = cookieStore.get("order")?.value;
    const db = getDB();
    if (!orderCookie) return;
    const order = JSON.parse(orderCookie);
    
    let total_price = 0;
    
    for (const item of order.cart) {
        const product = await db
        .selectFrom("products")
        .where("id", "=", item.id)
        .selectAll()
        .executeTakeFirst();
        
        if (!product) continue;
        
        total_price += item.quantity * product.price;
    }
    
    const resend = new Resend('re_RvuQVdyW_AucKAUV2HTAHnvQEGSxxfXd9');
    
    await resend.emails.send({
        from: "Resend <onboarding@resend.dev>",
        to: order.email,
        subject: "Order confirmation",
        html: "<p>We are confirming your order.</p>" +
        "<p>Shipping info:</p>" +
        "<p>Ulica: " + order.ulica + "</p>" +
        "<p>Popisne cislo domu: " + order.popisne_cislo_domu + "</p>" +
        "<p>Mesto: " + order.mesto + "</p>" +
        "<p>Zip code: " + order.zip_code + "</p>" +
        "<p>Krajina: " + order.krajina + "</p>" +
        "<p>Telefon: " + order.telefon + "</p>" +
        "<p>Email: " + order.email + "</p>" +
        "<p>Meno: " + order.meno + "</p>" +
        "<p>Priezvisko: " + order.priezvisko + "</p>" +
        "<p>Total: " + total_price + "€</p>",
    });
    cookieStore.delete("cart");
    cookieStore.delete("order");
    console.log(order.email);
    redirect("/confirmed");
  }
