import getDB from "@/lib/db";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminDashboard from "./AdminDashboard";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get("session")?.value;
  if (!sessionId) redirect("/");

  const db = getDB();

  const session = await db
    .selectFrom("session")
    .selectAll()
    .where("session_id", "=", sessionId)
    .executeTakeFirst();

  if (!session) redirect("/");

  const admin = await db
    .selectFrom("users")
    .selectAll()
    .where("id", "=", session.user_id)
    .executeTakeFirst();

  if (!admin || admin.is_admin === 0) redirect("/");

  const products = await db.selectFrom("products").selectAll().execute();
  const users = await db
    .selectFrom("users")
    .select(["id", "username", "email", "is_admin"])
    .execute();
  const orders = await db.selectFrom("orders").selectAll().execute();

  return (
    <AdminDashboard
      products={products}
      users={users}
      orders={orders}
    />
  );
}
