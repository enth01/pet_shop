"use client"

import { verifyCode } from "@/actions/user";
import styles from "../form.module.css";

export default function VerifyButton(props: { code: string; }) {
    async function handleVerify() {
        const res = await verifyCode(props.code);
        if (res?.error) {
            alert(res.error);
        } else if (res?.success) {
            window.location.href = "/password_change3";
        }
    }
    return (
        <button onClick={handleVerify} className={styles.btn}>Verify</button>
    )
}
