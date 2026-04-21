import { getUser, updateAddress } from "@/actions/user";
import getDB from "@/lib/db";
import { redirect } from "next/navigation";
import styles from "../../form.module.css";

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
        <div className={styles.container}>
            <h1 className={styles.title}>Address</h1>

            <form action={updateAddress} className={styles.form}>
                <label className={styles.field}>
                    Street:
                    <input
                        name="street"
                        className={styles.input}
                        defaultValue={address?.street ?? ""}
                        required
                    />
                </label>

                <label className={styles.field}>
                    House number:
                    <input
                        name="house_number"
                        className={styles.input}
                        defaultValue={address?.house_number ?? ""}
                        required
                    />
                </label>

                <label className={styles.field}>
                    City:
                    <input
                        name="city"
                        className={styles.input}
                        defaultValue={address?.city ?? ""}
                        required
                    />
                </label>

                <label className={styles.field}>
                    Zip code:
                    <input
                        name="zip_code"
                        className={styles.input}
                        defaultValue={address?.zip_code ?? ""}
                        required
                    />
                </label>

                <label className={styles.field}>
                    Country:
                    <input
                        name="country"
                        className={styles.input}
                        defaultValue={address?.country ?? ""}
                        required
                    />
                </label>

                <label className={styles.field}>
                    Phone number:
                    <input
                        name="phone_number"
                        className={styles.input}
                        defaultValue={address?.phone_number ?? ""}
                        required
                    />
                </label>

                <label className={styles.field}>
                    Name:
                    <input
                        name="name"
                        className={styles.input}
                        defaultValue={address?.name ?? ""}
                        required
                    />
                </label>

                <label className={styles.field}>
                    Surname:
                    <input
                        name="surname"
                        className={styles.input}
                        defaultValue={address?.surname ?? ""}
                        required
                    />
                </label>

                <div className={styles.buttonContainer}>
                    <button type="submit" className={styles.btn}>
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}