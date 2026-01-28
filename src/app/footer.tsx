import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.section}>
          <h3>Pet Shop</h3>
          <p>
            Everything your pet needs, from food to toys.
            Carefully selected products for happy, healthy animals.
          </p>
        </div>

        <div className={styles.section}>
          <h4>Quick links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/basket">Basket</Link></li>
            <li><Link href="/user">Your account</Link></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4>Contact</h4>
          <p>Email: support@petshop.example</p>
          <p>Phone: +420 123 456 789</p>
          <p>Prague, Czech Republic</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Pet Shop. All rights reserved.</p>
      </div>
    </footer>
  );
}
