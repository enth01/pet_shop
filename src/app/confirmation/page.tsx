// confirmation/page.tsx
import getDB from "@/lib/db";
import { cookies } from "next/headers";
import OrderButton from "./orderButton";

interface CartItem {
  id: number;
  quantity: number;
}

interface OrderCookie {
  ulica: string;
  popisne_cislo_domu: string;
  mesto: string;
  zip_code: string;
  krajina: string;
  telefon: string;
  email: string;
  meno: string;
  priezvisko: string;
}

export default async function ConfirmationPage() {
  const cookieStore = await cookies();
  const orderRaw = cookieStore.get("order")?.value ?? "";
  const cartRaw = cookieStore.get("cart")?.value ?? "[]";

  if (!orderRaw || cartRaw === "[]") {
    return (
      <main
        style={{
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "2rem", fontWeight: 700 }}>Confirmation</h1>
        <p style={{ color: "#666", marginTop: "1rem" }}>
          Nothing to confirm.
        </p>
      </main>
    );
  }

  const order: OrderCookie = JSON.parse(orderRaw) as OrderCookie;
  const cart: CartItem[] = JSON.parse(cartRaw) as CartItem[];

  const db = getDB();

  const products = await db
    .selectFrom("products")
    .selectAll()
    .where(
      "id",
      "in",
      cart.map((item) => item.id)
    )
    .execute();

    const productsFixPrice = products.map((product) => ({
      ...product,
      price: product.price / 100,
    }));

  const rows = productsFixPrice.map((product) => {
    const cartItem = cart.find((c) => c.id === product.id);
    const quantity = cartItem ? cartItem.quantity : 0;
    const total = product.price * quantity;

    return {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      total,
    };
  });

  const grandTotal = rows.reduce((sum, row) => sum + row.total, 0);

  return (
    <main
      style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: 700 }}>Confirmation</h1>

      {/* Shipping info */}
      <div
        style={{
          width: "100%",
          maxWidth: 700,
          background: "#f3f3f3",
          borderRadius: "0.75rem",
          padding: "1.5rem",
        }}
      >
        <h2 style={{ fontWeight: 600, marginBottom: "0.75rem" }}>
          Shipping information
        </h2>
        <p>{order.ulica} {order.popisne_cislo_domu}, {order.zip_code} {order.mesto}, {order.krajina}</p>
        <h2 style={{ fontWeight: 600, marginBottom: "0.75rem" }}>
          Contact information
        </h2>
        <p>Email: {order.email}</p>
        <p>Phone: {order.telefon}</p>
        <p>Name: {order.meno} {order.priezvisko}</p>
      </div>

      {/* Products table */}
      <div
        style={{
          width: "100%",
          maxWidth: 700,
          borderRadius: "0.75rem",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            background: "#e0e0e0",
            padding: "0.75rem",
            fontWeight: 600,
          }}
        >
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Total</div>
        </div>

        {/* Rows */}
        {rows.map((row, index) => (
          <div
            key={row.id}
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              padding: "0.75rem",
              background: index % 2 === 0 ? "#f7f7f7" : "#ebebeb",
            }}
          >
            <div>{row.name}</div>
            <div>{row.price} €</div>
            <div>{row.quantity}</div>
            <div>{row.total} €</div>
          </div>
        ))}

        {/* Grand total */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            padding: "0.75rem",
            background: "#dcdcdc",
            fontWeight: 700,
          }}
        >
          <div>Total</div>
          <div />
          <div />
          <div>{grandTotal} €</div>
        </div>
      </div>

      <OrderButton />
    </main>
  );
}
