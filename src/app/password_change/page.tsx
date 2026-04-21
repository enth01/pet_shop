"use client"

import { getUser, passwordChange } from "@/actions/user";
import { useEffect, useState } from "react";

export default function PasswordChangePage() {

    const [email, setEmail] = useState("");

    useEffect(() => {
        async function fetchUser() {
            const user = await getUser();
            if (user?.email) {
                setEmail(user.email);
            }
        }
        fetchUser();
    }, []);

    async function handleSendCode() {
        if (!email) {
            alert("Please enter an email address.");
            return;
        }
        await passwordChange(email);
    };

    return (
        <div>
            <h1>Change Password</h1>
            <p>We will send you a code to your email to verify.</p>
            <br />
            <label htmlFor="email">Email Address</label>
            <br />
            <input
                id="email"
                type="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <button className="btn" onClick={handleSendCode}>Send code</button>
        </div>
    );
}
