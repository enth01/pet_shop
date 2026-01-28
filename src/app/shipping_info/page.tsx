import getDB from "@/lib/db";
import { cookies } from "next/headers";
import LinkToConfirmationButton from "./LinkToConfirmation";
import { updateAddress } from "@/actions/user";

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
    <div className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">Shipping info</h1>
      <form
        className="flex flex-col gap-4 w-80 bg-gray-100 p-6 rounded-xl shadow"
        action={updateAddress}
      >
        <label className="flex flex-col">
          Ulica
        <br />
        <input
            name="street"
            id="ulica"
            type="text"
            className="border rounded p-2 w-full"
            defaultValue={userData.street}
          />
        </label>

        <br />
        <br />

        <label className="flex flex-col">
          Popisne cislo domu
        <br />
        <input
            name="house_number"
            type="text"
            id="popisne_cislo_domu"
            className="border rounded p-2 w-full"
            defaultValue={userData.house_number}
          />
        </label>

        <br />
        <br />

        <label className="flex flex-col">
          Mesto
        <br />
        <input
            name="city"
            type="text"
            id="mesto"
            className="border rounded p-2 w-full"
            defaultValue={userData.city}
          />
        </label>

        <br />
        <br />

        <label className="flex flex-col">
          ZIP code
        <br />
        <input
            name="zip_code"
            type="text"
            id="zip_code"
            className="border rounded p-2 w-full"
            defaultValue={userData.zip_code}
          />
        </label>

        <br />
        <br />

        <label className="flex flex-col">
          Krajina
        <br />
        <input
            name="country"
            type="text"
            id="krajina"
            className="border rounded p-2 w-full"
            defaultValue={userData.country}
          />
        </label>

        <br />
        <br />

        <label className="flex flex-col">
          Telefonne cislo
        <br />
        <input
            name="phone_number"
            type="text"
            id="telefon"
            className="border rounded p-2 w-full"
            defaultValue={userData.phone_number}
          />
        </label>

        <br />
        <br />

        <label className="flex flex-col">
          Email
        <br />
        <input
            name="email"
            type="email"
            id="email"
            className="border rounded p-2 w-full"
            defaultValue={userData.email}
          />
        </label>

        <br />
        <br />

        <label className="flex flex-col">
          Meno
        <br />
        <input
            name="name"
            type="text"
            id="meno"
            className="border rounded p-2 w-full"
            defaultValue={userData.name}
          />
        </label>

        <br />
        <br />

        <label className="flex flex-col">
          Priezvisko
        <br />
        <input
            name="surname"
            type="text"
            id="priezvisko"
            className="border rounded p-2 w-full"
            defaultValue={userData.surname}
          />
        </label>

        <br />
        <br />

        <div className="flex gap-4 mt-4">
          <LinkToConfirmationButton />
        <br />
        <br />
        <button
            type="submit"
            className="btn"
          >
            Save
          </button>
        <br />
        <br />
        </div>
      </form>
    </div>
  );
}
