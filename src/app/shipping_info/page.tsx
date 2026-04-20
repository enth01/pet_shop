import getDB from "@/lib/db";
import { cookies } from "next/headers";
import LinkToConfirmationButton from "./LinkToConfirmation";
import { updateAddress } from "@/actions/user";
import styles from "../form.module.css"; // Adjust path as necessary

export default async function ShippingInfoPage() {
  const db = getDB();
  const keksiky = await cookies();
  const sessionId = keksiky.get("session")?.value;

  let userData: {
    email?: string;
    street?: string;
    house_number?: string;
    city?: string;
    zip_code?: string;
    country?: string;
    phone_number?: string;
    name?: string;
    surname?: string;
  } = {};

  if (sessionId) {
    const session = await db
      .selectFrom("session")
      .selectAll()
      .where("session_id", "=", sessionId)
      .executeTakeFirst();

    if (session) {
      const user = await db
        .selectFrom("users")
        .selectAll()
        .where("id", "=", session.user_id)
        .executeTakeFirst();

      const address = await db
        .selectFrom("user_address")
        .selectAll()
        .where("user_id", "=", session.user_id)
        .executeTakeFirst();

      if (user || address) {
        userData = {
          email: user?.email ?? "",
          street: address?.street ?? "",
          house_number: address?.house_number ?? "",
          city: address?.city ?? "",
          zip_code: address?.zip_code ?? "",
          country: address?.country ?? "",
          phone_number: address?.phone_number ?? "",
          name: address?.name ?? "",
          surname: address?.surname ?? "",
        };
      }
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Shipping info</h1>
      
      <form className={styles.form} action={updateAddress}>
        <label className={styles.field}>
          Ulica
          <input
            name="street"
            id="ulica"
            type="text"
            className={styles.input}
            defaultValue={userData.street}
          />
        </label>

        <label className={styles.field}>
          Popisne cislo domu
          <input
            name="house_number"
            type="text"
            id="popisne_cislo_domu"
            className={styles.input}
            defaultValue={userData.house_number}
          />
        </label>

        <label className={styles.field}>
          Mesto
          <input
            name="city"
            type="text"
            id="mesto"
            className={styles.input}
            defaultValue={userData.city}
          />
        </label>

        <label className={styles.field}>
          ZIP code
          <input
            name="zip_code"
            type="text"
            id="zip_code"
            className={styles.input}
            defaultValue={userData.zip_code}
          />
        </label>

        <label className={styles.field}>
          Krajina
          <input
            name="country"
            type="text"
            id="krajina"
            className={styles.input}
            defaultValue={userData.country}
          />
        </label>

        <label className={styles.field}>
          Telefonne cislo
          <input
            name="phone_number"
            type="text"
            id="telefon"
            className={styles.input}
            defaultValue={userData.phone_number}
          />
        </label>

        <label className={styles.field}>
          Email
          <input
            name="email"
            type="email"
            id="email"
            className={styles.input}
            defaultValue={userData.email}
          />
        </label>

        <label className={styles.field}>
          Meno
          <input
            name="name"
            type="text"
            id="meno"
            className={styles.input}
            defaultValue={userData.name}
          />
        </label>

        <label className={styles.field}>
          Priezvisko
          <input
            name="surname"
            type="text"
            id="priezvisko"
            className={styles.input}
            defaultValue={userData.surname}
          />
        </label>

        <div className={styles.buttonContainer}>
          <LinkToConfirmationButton />
        </div>
      </form>
    </div>
  );
}