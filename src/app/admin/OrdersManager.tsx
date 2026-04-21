"use client";

import type { Orders } from "@/lib/db-types";
import { deleteOrder, markOrderAsSent } from "@/actions/admin";
import { Selectable } from "kysely";

export default function OrdersManager({
    orders,
}: {
    orders: Selectable<Orders>[];
}) {
    return (
        <section className="admin-box">
            <h2>Orders</h2>

            {orders.map(o => (
                <div key={o.id} className="admin-row">
                    <span>
                        {o.email} | {o.city} | objednávka č. {o.id}
                    </span>

                    {o.confirmed === 0 && (
                        <button onClick={() => markOrderAsSent(o.id, o.email)}>
                            Mark as sent
                        </button>
                    )}

                    <button onClick={() => deleteOrder(o.id)}>Delete</button>
                </div>
            ))}
        </section>
    );
}
