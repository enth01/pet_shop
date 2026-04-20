"use client"

import { useState } from "react"
import LoginButton from "./loginButton";
import styles from "../form.module.css"; // Importing the new module

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>

      <form
        className={styles.form}
        onSubmit={(e) => e.preventDefault()}
      >
        <label className={styles.field}>
          Username
          <input
            type="text"
            className={styles.input}
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label className={styles.field}>
          Password
          <input
            type="password"
            className={styles.input}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <LoginButton username={username} password={password} />
      </form>
    </div>
  );
}