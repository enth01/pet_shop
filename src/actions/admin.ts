"use server";

import getDB from "@/lib/db";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Resend } from "resend";
import { writeFile } from "fs/promises";

async function requireAdmin() {
    const cookieStore = await cookies();
    const sessionId = cookieStore.get("session")?.value;
    if (!sessionId) redirect("/");

    const db = getDB();

    const session = await db
        .selectFrom("session")
        .selectAll()
        .where("session_id", "=", sessionId)
        .executeTakeFirst();

    if (!session) redirect("/");

    const user = await db
        .selectFrom("users")
        .selectAll()
        .where("id", "=", session.user_id)
        .executeTakeFirst();

    if (!user || user.is_admin === 0) redirect("/");

    return { db, user };
}

export async function addProduct(name: string, description: string, category: string, price: number, image: File | null) {
    const { db } = await requireAdmin();

    if (!image) {
        return { error: "Image is required" };
    }

    const buffer = Buffer.from(await image.arrayBuffer());
    const fileName = `${Date.now()}_${image.name}`;

    await import("fs/promises").then(fs =>
        fs.writeFile(`public/uploads/${fileName}`, buffer)
    );

    await db
        .insertInto("products")
        .values({
            name,
            description,
            category,
            price,
            image: fileName,
        })
        .execute();

    revalidatePath("/admin");
    revalidatePath("/products");

    return { success: true };
}

export async function updateProduct(
    id: number,
    data: {
        name?: string;
        description?: string;
        category?: string;
        price?: number;
        image?: File;
    }
) {

    const { db } = await requireAdmin();

    let imageName: string | undefined;

    if (data.image) {
        const bytes = await data.image.arrayBuffer();
        const buffer = Buffer.from(bytes);
        imageName = Date.now() + "_" + data.image.name;

        await writeFile(
            `./public/uploads/${imageName}`,
            buffer
        );
    }

    await db
        .updateTable("products")
        .set({
            name: data.name,
            description: data.description,
            category: data.category,
            price: data.price,
            ...(imageName ? { image: imageName } : {}),
        })
        .where("id", "=", id)
        .execute();

    revalidatePath("/admin");
}

export async function deleteProduct(id: number) {
    const { db } = await requireAdmin();

    await db.deleteFrom("favorite_products").where("product_id", "=", id).execute();
    await db.deleteFrom("order_product").where("product_id", "=", id).execute();
    await db.deleteFrom("products").where("id", "=", id).execute();

    revalidatePath("/admin");
    revalidatePath("/products");
}

export async function deleteUserAndData(userId: number) {
    const { db, user } = await requireAdmin();

    if (user.id === userId) {
        return { error: "You cannot delete yourself." };
    }

    const target = await db
        .selectFrom("users")
        .selectAll()
        .where("id", "=", userId)
        .executeTakeFirst();

    if (!target || target.is_admin === 1) {
        return { error: "Cannot delete this user." };
    }

    await db.deleteFrom("favorite_products").where("user_id", "=", userId).execute();
    await db.deleteFrom("order_product")
        .where("order_id", "in",
            db.selectFrom("orders").select("id").where("user_id", "=", userId)
        )
        .execute();
    await db.deleteFrom("orders").where("user_id", "=", userId).execute();
    await db.deleteFrom("session").where("user_id", "=", userId).execute();
    await db.deleteFrom("users").where("id", "=", userId).execute();

    revalidatePath("/admin");
}

export async function markOrderAsSent(orderId: number, email: string) {
    const { db } = await requireAdmin();

    await db
        .updateTable("orders")
        .set({ confirmed: 1 })
        .where("id", "=", orderId)
        .execute();

    const resend = new Resend(process.env.RESEND_API_KEY!);

    await resend.emails.send({
        from: "Shop <onboarding@resend.dev>",
        to: email,
        subject: "Vaša objednávka je na ceste! 🚚",
        html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f1f1a; background-color: #f0f0f0; padding: 40px; margin: 0;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.08);">
            
            <div style="background-color: #22c55e; padding: 20px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Objednávka odoslaná</h1>
            </div>

            <div style="padding: 30px; text-align: center;">
              <div style="font-size: 48px; margin-bottom: 20px;">🚚</div>
              <p style="font-size: 18px; font-weight: bold; margin-top: 0;">
                Skvelé správy!
              </p>
              <p>Vaša objednávka č. <strong>${orderId}</strong> bola práve odoslaná a čoskoro bude u Vás.</p>
              
              <div style="margin: 30px 0;">
                <a href="#" style="background-color: #22c55e; color: white; padding: 12px 24px; text-decoration: none; border-radius: 12px; font-weight: bold;">
                  Sledovať balík
                </a>
              </div>

              <p style="font-size: 14px; color: #6b7280; margin-top: 20px;">
                Ak máte akékoľvek otázky, neváhajte nás kontaktovať odpoveďou na tento e-mail.
              </p>
            </div>

            <div style="background-color: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #6b7280;">
              <p style="margin: 0;">&copy; 2026 Váš Obchod. Všetky práva vyhradené.</p>
            </div>
            
          </div>
        </div>
        `,
    });

    revalidatePath("/admin");
}

export async function deleteOrder(orderId: number) {
    const { db } = await requireAdmin();

    await db.deleteFrom("order_product").where("order_id", "=", orderId).execute();
    await db.deleteFrom("orders").where("id", "=", orderId).execute();

    revalidatePath("/admin");
}
