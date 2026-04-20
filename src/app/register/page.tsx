"use client"

import { useState } from "react"
import RegisterButton from "./registerButton";
import styles from "../form.module.css"; // Adjust path based on your file location

export default function RegisterPage() {
  const [mail, setMail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Register</h1>

      <form
        className={styles.form}
        onSubmit={(e) => e.preventDefault()}
      >
        <label className={styles.field}>
          Email
          <input
            type="email"
            className={styles.input}
            placeholder="example@mail.com"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </label>

        <label className={styles.field}>
          Username
          <input
            type="text"
            className={styles.input}
            placeholder="Choose a username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label className={styles.field}>
          Password
          <input
            type="password"
            className={styles.input}
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        {/* The RegisterButton can now be styled to match the green .btn in your globals */}
        <RegisterButton username={username} password={password} email={mail} />
      </form>
    </div>
  );
}