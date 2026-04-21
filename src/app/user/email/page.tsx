"use client"

import { useState } from "react";
import { updateEmail } from "@/actions/user";

export default function ChangeEmail() {
    const [email, setEmail] = useState("");

    return (
        <form
            className="card max-w-md mx-auto flex flex-col gap-4"
            onSubmit={async (e) => {
                e.preventDefault();
                const res = await updateEmail(email);
                if (res?.error) alert(res.error);
                else alert("Email updated!");
            }}
        >
            <h1>Change Email</h1>
            <input
                type="email"
                placeholder="New email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border p-2 rounded"
            />
            <button type="submit" className="btn">Save</button>
        </form>
    );
}
