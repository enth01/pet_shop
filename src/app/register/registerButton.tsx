"use client"

import { login, register } from "@/actions/user";

export default function RegisterButton(props: { email: string; username: string; password: string; }) {
  return <button onClick={ async () => { 
    const res = await register(props.email, props.username, props.password);
    if (res?.error){
      alert(res.error);
    } else if (res?.success){
      const res2 = await login(props.username, props.password);
      if (res2?.error){
        alert(res2.error);
      } else if (res2?.success){
        window.location.href = "/user";
        alert("Successfully registered and automatically logged in!");
      }
    }
  }}>Sign in</button>
}
