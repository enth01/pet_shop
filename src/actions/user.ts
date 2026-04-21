"use server";

import getDB from "@/lib/db";
import { cookies } from "next/headers";
import { checkPassword, hashPassword } from "@/lib/hashing";
import validator from 'validator';
import { Resend } from "resend";
import { redirect } from "next/navigation";

export async function login(username: string, password: string) {
    const db = getDB();
    const keksiky = await cookies();

    async function generateSessionId() {
        while (true) {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            for (let i = 0; i < 10; i++) {
                result += characters.charAt(Math.floor(Math.random() * characters.length));
            }

            const check = await db
                .selectFrom("session")
                .where("session_id", "=", result)
                .selectAll()
                .executeTakeFirst();

            if (!check) return result;
        }
    }

    if (!username || !password) {
        return { error: "Missing fields" };
    }

    const user = await db
        .selectFrom("users")
        .where("username", "=", username)
        .selectAll()
        .executeTakeFirst();

    if (!user) {
        return { error: "Invalid credentials" };
    }

    if (!(await checkPassword(password, user.password))) {
        return { error: "Wrong password" };
    }

    let session = await db
        .selectFrom("session")
        .where("user_id", "=", user.id)
        .selectAll()
        .executeTakeFirst();

    if (!session) {
        await db
            .insertInto("session")
            .values({
                user_id: user.id,
                session_id: await generateSessionId(),
                expiration: Date.now() + 1000 * 60 * 60 * 24 * 7,
            })
            .execute();

        session = await db
            .selectFrom("session")
            .where("user_id", "=", user.id)
            .selectAll()
            .executeTakeFirst();
    } else if (session.expiration < Date.now()) {
        await db
            .updateTable("session")
            .set({ expiration: Date.now() + 1000 * 60 * 60 * 24 * 7 })
            .where("user_id", "=", user.id)
            .execute();
    }

    if (session) {
        keksiky.set("session", session.session_id, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24 * 7
        });
    }

    return { success: true };
}

export async function logout() {
    const keksiky = await cookies()
    const sessionId = keksiky.get("session")?.value

    if (!sessionId) {
        return { error: "Not logged in, did not find session id" }
    }

    const db = getDB()

    const session = await db
        .selectFrom("session")
        .selectAll()
        .where("session_id", "=", sessionId)
        .executeTakeFirst()

    if (!session) {
        return { error: "session not found" }
    }

    await db
        .deleteFrom("session")
        .where("session_id", "=", sessionId)
        .execute()

    keksiky.delete("session");

    return { success: true }
}

export async function register(email: string, username: string, password: string) {
    const db = getDB();
    if (!email || !username || !password) {
        return { error: "Missing fields" };
    }

    const name_check = await db
        .selectFrom("users")
        .where("username", "=", username)
        .selectAll()
        .executeTakeFirst();

    if (name_check) {
        return { error: "Username already exists" };
    }

    const email_check = await db
        .selectFrom("users")
        .where("email", "=", email)
        .selectAll()
        .executeTakeFirst();

    if (email_check) {
        return { error: "An account with this email already exists" };
    }

    if (password.length < 8) {
        return { error: "Password must be at least 8 characters long" };
    }

    if (!validator.isEmail(email)) {
        return { error: "Invalid email" };
    }

    await db
        .insertInto("users")
        .values({
            email: email,
            username: username,
            password: await hashPassword(password),
        })
        .execute();

    return { success: true };
}

export async function getUser() {
    const db = getDB();
    const keksiky = await cookies()
    const sessionId = keksiky.get("session")?.value

    if (!sessionId) {
        return null;
    }

    const session = await db
        .selectFrom("session")
        .where("session_id", "=", sessionId)
        .selectAll()
        .executeTakeFirst();

    if (!session) {
        return null;
    }

    if (session.expiration < Date.now()) {
        logout();
        return null;
    }

    const user = await db
        .selectFrom("users")
        .where("id", "=", session.user_id)
        .selectAll()
        .executeTakeFirst();

    if (!user) {
        return null;
    }

    return user;
}

export async function passwordChange(mail: string) {
    const resend = new Resend(process.env.RESEND_API_KEY!);
    const keksiky = await cookies();

    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    const stringNumber = randomNumber.toString();
    const hashedNumber = await hashPassword(stringNumber)

    keksiky.set("number", hashedNumber, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 300
    });

    keksiky.set("reset_email", mail, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 600 // 10 minutes
    });

    await resend.emails.send({
        from: "Resend <onboarding@resend.dev>",
        to: mail,
        subject: "Password change",
        html: "<p>Your code is: " + stringNumber + "</p>",
    });

    redirect("/password_change2");
}

export async function passwordChange3(formData: FormData) {
    const db = getDB();
    const keksiky = await cookies();
    const resetEmail = keksiky.get("reset_email")?.value;
    const password1 = formData.get("password1") as string | null;
    const password2 = formData.get("password2") as string | null;

    if (!resetEmail || !password1 || !password2 || password1 !== password2 || password1.length < 8) {
        return { error: "Invalid request or passwords do not match" };
    }

    const hashedPassword = await hashPassword(password1 as string);

    await db
        .updateTable("users")
        .set({ password: hashedPassword })
        .where("email", "=", resetEmail)
        .execute();

    keksiky.delete("reset_email");
    keksiky.delete("number");

    redirect("/password_change4");
}

export async function updateAddress(formData: FormData) {
    const user = await getUser();
    if (!user) return;

    const db = getDB();

    const data = {
        street: formData.get("street") as string,
        house_number: formData.get("house_number") as string,
        city: formData.get("city") as string,
        zip_code: formData.get("zip_code") as string,
        country: formData.get("country") as string,
        phone_number: formData.get("phone_number") as string,
        name: formData.get("name") as string,
        surname: formData.get("surname") as string,
    };

    const existing = await db
        .selectFrom("user_address")
        .select("id")
        .where("user_id", "=", user.id)
        .executeTakeFirst();

    if (existing) {
        await db
            .updateTable("user_address")
            .set(data)
            .where("user_id", "=", user.id)
            .execute();
    } else {
        await db
            .insertInto("user_address")
            .values({ ...data, user_id: user.id })
            .execute();
    }

    redirect("/user");
}

export async function updateEmail(newEmail: string) {
    const db = getDB();
    const user = await getUser();
    if (!user) return { error: "Not logged in" };

    if (!validator.isEmail(newEmail)) return { error: "Invalid email" };

    const exists = await db
        .selectFrom("users")
        .where("email", "=", newEmail)
        .selectAll()
        .executeTakeFirst();

    if (exists) return { error: "Email already in use" };

    await db
        .updateTable("users")
        .set({ email: newEmail })
        .where("id", "=", user.id)
        .execute();

    return { success: true };
}


export async function verifyCode(input: string) {
    const keksiky = await cookies();
    const code = keksiky.get("number")?.value ?? "";
    const isCodeValid = await checkPassword(input, code);

    if (isCodeValid) {
        return { success: true };
    } else {
        return { error: "Invalid code" };
    }
}
