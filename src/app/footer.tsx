import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.section}>
                    <h3>Pet Shop</h3>
                    <p>
                        Všetko, čo váš maznáčik potrebuje, od krmiva až po hračky. Starostlivo vybrané produkty pre šťastné a zdravé zvieratá.
                    </p>
                </div>

                <div className={styles.section}>
                    <h4>Contact</h4>
                    <p>Email: support@petshop.com</p>
                    <p>Phone: +421 123 456 789</p>
                </div>
            </div>

            <div className={styles.bottom}>
                <p>© {new Date().getFullYear()} Pet Shop. All rights reserved.</p>
            </div>
        </footer>
    );
}
