import getDB from "@/lib/db";
import { cookies } from "next/headers";
import LogoutButton from "./logoutButton";
import Link from "next/link";
import { getFavoriteProducts } from "@/actions/products";
import productStyles from "../products/products.module.css";
import SingleProduct from "../products/singleProduct";
import { deleteAddress } from "@/actions/user";
import DeleteAddressButton from "./deleteAddressButton";

export default async function UserPage() {
    const cookieStore = await cookies();
    const sessionId = cookieStore.get("session")?.value;

    if (!sessionId) return <p className="p-6">Not logged in.</p>;

    const db = getDB();

    const session = await db
        .selectFrom("session")
        .selectAll()
        .where("session_id", "=", sessionId)
        .executeTakeFirst();

    if (!session || session.expiration < Date.now()) {
        return <p className="p-6">Session expired.</p>;
    }

    const user = await db
        .selectFrom("users")
        .selectAll()
        .where("id", "=", session.user_id)
        .executeTakeFirstOrThrow();

    const orders = await db
        .selectFrom("orders")
        .selectAll()
        .where("user_id", "=", user.id)
        .execute();

    const address = await db
        .selectFrom("user_address")
        .selectAll()
        .where("user_id", "=", user.id)
        .executeTakeFirst();
    
    const favoriteProducts = await getFavoriteProducts();

    return (
        <main className="max-w-4xl mx-auto p-6 space-y-8">
            <section className="card">
                <LogoutButton />
                <h1>Account</h1>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>

                <div className="flex gap-4 mt-4">
                    <Link href="/password_change" className="btn">Change password</Link>
                    <br />
                    <br />
                    <Link href="/user/email" className="btn">Change email</Link>
                </div>
            </section>

            <section className="card">
                <h2>Address</h2>
                {address ? (
                    <>
                        <p>{address.street} {address.house_number}</p>
                        <p>{address.city}, {address.zip_code}</p>
                        <p>{address.country}</p>
                        <Link href="/user/address" className="btn">Edit address</Link>
                        <br />
                        <br />
                        <DeleteAddressButton />
                    </>
                ) : (
                    <Link href="/user/address" className="btn">Add address</Link>
                )}
            </section>

            <section className="card">
                <h2>Orders</h2>
                {orders.length === 0 && <p>No orders yet.</p>}
                {orders.map(order => (
                    <div key={order.id} className="order">
                        <p>Objednavka číslo #{order.id}</p>
                        <p>Status: {order.confirmed ? "Odoslaná" : "Spracúva sa"}</p>
                    </div>
                ))}
            </section>

            <section className="card">
                <h2>Obľúbené produkty</h2>
                {favoriteProducts.length === 0 ? (
                    <p>Zatiaľ nemáte žiadne obľúbené produkty.</p>
                ) : (
                    <div className={productStyles.grid}>
                        {favoriteProducts.map((product) => (
                            <SingleProduct
                                key={product.id}
                                product={product}
                                userLoggedIn={true}
                            />
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}
