"use client";

import { useState } from "react";
import type { Products, Users, Orders } from "@/lib/db-types";
import AddProductForm from "./AddProductForm";
import ProductEditor from "./ProductEditor";
import UserManager from "./UserManager";
import OrdersManager from "./OrdersManager";
import type { Selectable } from "kysely";

export default function AdminDashboard(props: {
    products: Selectable<Products>[];
    users: Pick<Selectable<Users>, "id" | "username" | "email" | "is_admin">[];
    orders: Selectable<Orders>[];
}) {
    const [tab, setTab] = useState<"products" | "users" | "orders">("products");

    return (
        <main className="admin">
            <h1>Admin panel</h1>

            <nav className="admin-tabs">
                <button onClick={() => setTab("products")}>Products</button>
                <button onClick={() => setTab("users")}>Users</button>
                <button onClick={() => setTab("orders")}>Orders</button>
            </nav>

            {tab === "products" && (
                <>
                    <AddProductForm />
                    <ProductEditor products={props.products} />
                </>
            )}

            {tab === "users" && <UserManager users={props.users} />}

            {tab === "orders" && <OrdersManager orders={props.orders} />}
        </main>
    );
}
