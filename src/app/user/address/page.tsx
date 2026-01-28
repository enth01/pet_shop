// user/address/page.tsx
import { getUser, updateAddress } from "@/actions/user";
import getDB from "@/lib/db";
import { redirect } from "next/navigation";

export default async function AddressPage() {
  const user = await getUser();
  if (!user) redirect("/");

  const db = getDB();

  const address = await db
    .selectFrom("user_address")
    .selectAll()
    .where("user_id", "=", user.id)
    .executeTakeFirst();

  return (
    <form
      action={updateAddress}
      style={{
        maxWidth: 500,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <h1 style={{ fontSize: 24, fontWeight: 700 }}>Address</h1>

      <label>
        Street:
        <input
          name="street"
          defaultValue={address?.street ?? ""}
          required
          style={{ width: "100%", padding: 8, borderRadius: 8, marginTop: 4 }}
        />
      </label>

      <label>
        House number:
        <input
          name="house_number"
          defaultValue={address?.house_number ?? ""}
          required
          style={{ width: "100%", padding: 8, borderRadius: 8, marginTop: 4 }}
        />
      </label>

      <label>
        City:
        <input
          name="city"
          defaultValue={address?.city ?? ""}
          required
          style={{ width: "100%", padding: 8, borderRadius: 8, marginTop: 4 }}
        />
      </label>

      <label>
        Zip code:
        <input
          name="zip_code"
          defaultValue={address?.zip_code ?? ""}
          required
          style={{ width: "100%", padding: 8, borderRadius: 8, marginTop: 4 }}
        />
      </label>

      <label>
        Country:
        <input
          name="country"
          defaultValue={address?.country ?? ""}
          required
          style={{ width: "100%", padding: 8, borderRadius: 8, marginTop: 4 }}
        />
      </label>

      <label>
        Phone number:
        <input
          name="phone_number"
          defaultValue={address?.phone_number ?? ""}
          required
          style={{ width: "100%", padding: 8, borderRadius: 8, marginTop: 4 }}
        />
      </label>

      <label>
        Name:
        <input
          name="name"
          defaultValue={address?.name ?? ""}
          required
          style={{ width: "100%", padding: 8, borderRadius: 8, marginTop: 4 }}
        />
      </label>

      <label>
        Surname:
        <input
          name="surname"
          defaultValue={address?.surname ?? ""}
          required
          style={{ width: "100%", padding: 8, borderRadius: 8, marginTop: 4 }}
        />
      </label>

      <button
        type="submit"
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: 12,
          border: "none",
          borderRadius: 12,
          fontWeight: 600,
          cursor: "pointer",
          marginTop: 12,
        }}
      >
        Save
      </button>
    </form>
  );
}
