"use client";

import { deleteUserAndData } from "@/actions/admin";

export default function UserManager(props: {
    users: { id: number; username: string; email: string; is_admin: number | null }[];
}) {
    return (
        <section className="admin-box">
            <h2>Users</h2>

            {props.users.map(u => (
                <div key={u.id} className="admin-row">
                    <span>{u.username} ({u.email})</span>
                    {u.is_admin ? (
                        <span>Admin</span>
                    ) : (
                        <button onClick={() => deleteUserAndData(u.id)}>Delete</button>
                    )}
                </div>
            ))}
        </section>
    );
}
