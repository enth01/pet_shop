import getDB from "@/lib/db";
import { cookies } from "next/headers";
import Link from "next/link";
import styles from "./navbar.module.css";

export default async function NavBar() {
  const keksiky = await cookies();
  const sessionId = keksiky.get("session")?.value;
  const db = getDB();

  const defaultReturn = (
    <nav className={styles.navbar}>
      <div className={styles.navItem}>
        <Link className={styles.navLink} href="/">Domov</Link>
      </div>
      <div className={styles.navItem}>
        <Link className={styles.navLink} href="/products">Produkty</Link>
      </div>
      <div className={styles.navItem}>
        <Link className={styles.navLink} href="/login">Prihlásenie</Link>
      </div>
      <div className={styles.navItem}>
        <Link className={styles.navLink} href="/register">Registrácia</Link>
      </div>
      <div className={styles.navItem}>
        <Link className={styles.navLink} href="/basket">Košík</Link>
      </div>
    </nav>
  );

  const adminReturn = (
    <nav className={styles.navbar}>
      <div className={styles.navItem}>
        <Link className={styles.navLink} href="/">Domov</Link>
      </div>
      <div className={styles.navItem}>
        <Link className={styles.navLink} href="/products">Produkty</Link>
      </div>
      <div className={styles.navItem}>
        <Link className={styles.navLink} href="/admin">Admin</Link>
      </div>
      <div className={styles.navItem}>
        <Link className={styles.navLink} href="/user">Vaše konto</Link>
      </div>
      <div className={styles.navItem}>
        <Link className={styles.navLink} href="/basket">Košík</Link>
      </div>
    </nav>
  );

  const userReturn = (
    <nav className={styles.navbar}>
      <div className={styles.navItem}>
        <Link className={styles.navLink} href="/">Domov</Link>
      </div>
      <div className={styles.navItem}>
        <Link className={styles.navLink} href="/products">Produkty</Link>
      </div>
      <div className={styles.navItem}>
        <Link className={styles.navLink} href="/user">Vaše konto</Link>
      </div>
      <div className={styles.navItem}>
        <Link className={styles.navLink} href="/basket">Košík</Link>
      </div>
    </nav>
  );

  if (!sessionId) {
    return defaultReturn;
  }

  const session = await db
    .selectFrom("session")
    .selectAll()
    .where("session_id", "=", sessionId)
    .executeTakeFirst();

  if (!session) {
    return defaultReturn;
  }

  const user = await db
    .selectFrom("users")
    .selectAll()
    .where("id", "=", session.user_id)
    .executeTakeFirst();

  if (!user) {
    return defaultReturn;
  }

  if (user.is_admin) {
    return adminReturn;
  } else {
    return userReturn;
  }
}
