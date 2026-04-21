"use client"
import { passwordChange3 } from "@/actions/user";

export default function PasswordChange3Page() {
    return (
        <form
            action={passwordChange3}
            className="card max-w-md mx-auto flex flex-col gap-4"
        >
            <h1>Set New Password</h1>
            <input
                name="password1"
                type="password"
                placeholder="New password"
                required
                className="border p-2 rounded"
            />
            <input
                name="password2"
                type="password"
                placeholder="Repeat password"
                required
                className="border p-2 rounded"
            />
            <button type="submit" className="btn">Save</button>
        </form>
    );
}
