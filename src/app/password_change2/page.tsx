"use client"

import { useState } from "react"
import VerifyButton from "./verifyButton";
import styles from "../form.module.css";

export default function LoginPage() {
    const [code, setCode] = useState("")

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Verify code</h1>

            <form
                className={styles.form}
                onSubmit={(e) => e.preventDefault()}
            >
                <label className={styles.field}>
                    Code
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Enter the code"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                </label>

                <VerifyButton code={code} />
            </form>
        </div>
    );
}