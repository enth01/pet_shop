"use client"
import { passwordChange } from "@/actions/user";

export default function PasswordChangePage() {
  return (
    <div className="card max-w-md mx-auto flex flex-col gap-4">
      <h1>Change Password</h1>
      <p>We will send you a code to your email to verify.</p>
      <button className="btn" onClick={passwordChange}>Send code</button>
    </div>
  );
}
