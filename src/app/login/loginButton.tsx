"use client"

import { login } from "@/actions/user";

export default function LoginButton(props: { username: string; password: string }) {
  return <button onClick={ async () => {
    const res = await login(props.username, props.password);
    if (res?.error){
      alert(res.error);
    } else if (res?.success){
      window.location.href = "/user";
      alert("Successfully logged in!");
    }
  }}>Sign in</button>
}
