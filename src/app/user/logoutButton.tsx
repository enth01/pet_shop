"use client"

import { logout } from "@/actions/user"

export default function LogoutButton() {
    return <button style={{float: "right", fontFamily: "Arial, Helvetica, sans-serif", fontSize: "16px"}} className="btn" onClick={async () => { 
        const res = await logout();
        if (res?.error) {
          alert(res.error);
        } else if (res?.success) {
          window.location.href = "/";
          alert("Successfully logged out!");
        }
     }}>Logout</button>
}