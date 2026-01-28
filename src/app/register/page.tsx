"use client"

import { useState } from "react"
import RegisterButton from "./registerButton";

export default function RegisterPage() {

  const [mail, setMail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">Register</h1>

      <form
        className="flex flex-col gap-4 w-80 bg-gray-100 p-6 rounded-xl shadow"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="flex flex-col">
          mail
          <br />
          <input
            type="email"
            className="border rounded p-2 w-full"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label className="flex flex-col">
          username
          <br />
          <input
            type="text"
            className="border rounded p-2 w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label className="flex flex-col">
          password
          <br />
          <input
            type="password"
            className="border rounded p-2 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <br />
        <RegisterButton username={ username } password={ password } email={ mail } />
      </form>
    </div>
  );
}
