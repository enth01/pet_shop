"use client"
import { useState } from "react";

export default function VerifyCode({ code }: { code: string }) {
  const [input, setInput] = useState("");
  return (
    <div className="card max-w-md mx-auto flex flex-col gap-4">
      <h1>Verify Code</h1>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          if (e.target.value === code) window.location.href = "/password_change3";
        }}
        placeholder="Enter code"
        className="border p-2 rounded"
      />
      <p>Check your email for the 4-digit code.</p>
    </div>
  );
}
