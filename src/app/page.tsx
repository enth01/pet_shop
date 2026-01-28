import getDB from "@/lib/db";
import Image from "next/image";
import HeroCarousel from "./components/HeroCarousel";
import styles from "./page.module.css";
import AddToCartButton from "./products/addToCartButton";

export default async function Home() {
  const latestProducts = await getDB()
    .selectFrom("products")
    .selectAll()
    .orderBy("id", "desc")
    .limit(4)
    .execute();

  return (
    <main className={styles.home}>
      <HeroCarousel />

      <section className={styles.latest}>
        <h2>Our latest additions</h2>

        <div className={styles.productRow}>
          {latestProducts.map((product) => (
            <div className={styles.productCard} key={product.id}>
              <Image
                src={"/uploads/" + product.image}
                alt={product.name}
                width={200}
                height={200}
              />
              <h3>{product.name}</h3>
              <p className={styles.price}>{product.price} €</p>
              <AddToCartButton id={product.id} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
