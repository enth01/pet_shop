"use client"

import { login, register } from "@/actions/user";
import styles from "../form.module.css";

export default function RegisterButton(props: { email: string; username: string; password: string; }) {

    async function handleRegister() {
        const res = await register(props.email, props.username, props.password);
        if (res?.error) {
            alert(res.error);
        } else if (res?.success) {
            const res2 = await login(props.username, props.password);
            if (res2?.error) {
                alert(res2.error);
            } else if (res2?.success) {
                window.location.href = "/user";
                alert("Successfully registered and automatically logged in!");
            }
        }
    }

    return (
        <button className={styles.btn} onClick={handleRegister}>
            Register
        </button>
    )
}
