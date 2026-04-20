import getDB from "@/lib/db";
import { cookies } from "next/headers";
import RemoveFromCartButton from "./removeFromCartButton";
import Link from "next/link";

export default async function BasketPage() {
  const keksiky = await cookies();
  const kosik = keksiky.get("cart")?.value ?? "[]";
  
  if (kosik === "" || kosik === "[]") {
    return (
      <main style={{ padding: 32, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24 }}>Basket</h1>
        <p style={{ color: "#555" }}>Your basket is empty.</p>
      </main>
    );
  }

  const kosik2 = JSON.parse(kosik);
  const products = await getDB()
    .selectFrom("products")
    .where("id", "in", kosik2.map((item: { id: number }) => item.id))
    .selectAll()
    .execute();

  const products_with_quantity = products.map(product => ({
    ...product,
    price: product.price / 100,
    quantity: kosik2.find((item: { id: number }) => item.id === product.id)?.quantity || 0,
  }));

  const total_price = products_with_quantity.reduce((acc, p) => acc + p.price * p.quantity, 0);

  return (
    <main style={{ padding: 32, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24 }}>Basket</h1>

      <div
        style={{
          borderRadius: 12,
          overflow: "hidden",
          width: "100%",
          maxWidth: 800,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        {/* Table Header */}
        <div
          style={{
            display: "flex",
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "12px 16px",
            fontWeight: 600,
          }}
        >
          <div style={{ flex: 3 }}>Product</div>
          <div style={{ flex: 1, textAlign: "center" }}>Quantity</div>
          <div style={{ flex: 1, textAlign: "center" }}>Price (€)</div>
          <div style={{ flex: 1, textAlign: "center" }}>Remove</div>
        </div>

        {/* Table Rows */}
        {products_with_quantity.map((product, i) => (
          <div
            key={product.id}
            style={{
              display: "flex",
              backgroundColor: i % 2 === 0 ? "#f5f5f5" : "#e0e0e0",
              padding: "12px 16px",
              alignItems: "center",
            }}
          >
            <div style={{ flex: 3, fontWeight: 500 }}>{product.name}</div>
            <div style={{ flex: 1, textAlign: "center" }}>{product.quantity}</div>
            <div style={{ flex: 1, textAlign: "center" }}>{(product.price * product.quantity).toFixed(2)}</div>
            <div style={{ flex: 1, textAlign: "center" }}>
              <RemoveFromCartButton
                id={product.id}
              />
            </div>
          </div>
        ))}

        {/* Table Footer / Total */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "12px 16px",
            fontWeight: 600,
            fontSize: 18,
            backgroundColor: "#f0f0f0",
          }}
        >
          Total: {total_price.toFixed(2)} €
        </div>
      </div>

      <Link
        href="/shipping_info"
        style={{
          marginTop: 24,
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "12px 24px",
          borderRadius: 12,
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        Checkout
      </Link>
    </main>
  );
}
