"use client"

import { login } from "@/actions/user";
import styles from "../form.module.css";

export default function LoginButton(props: { username: string; password: string }) {
    async function handleLogin() {
        const res = await login(props.username, props.password);
        if (res?.error) {
            alert(res.error);
        } else if (res?.success) {
            window.location.href = "/user";
            alert("Successfully logged in!");
        }
    }
    return (
        <button onClick={handleLogin} className={styles.btn}>Sign in</button>
    )
}
