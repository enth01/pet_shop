import getDB from "@/lib/db";
import HeroCarousel from "./carousel/HeroCarousel";
import styles from "./page.module.css";
import { getUser } from "@/actions/user";
import SingleProduct from "./products/singleProduct";
import { isInFavourites } from "@/actions/products";

export default async function Home() {
    const latestProducts = await getDB()
        .selectFrom("products")
        .selectAll()
        .orderBy("id", "desc")
        .limit(4)
        .execute();

    const productsWithFav = [];

    for (const product of latestProducts) {
        const is_in_fav = await isInFavourites(product.id);
        productsWithFav.push({ ...product, is_in_fav });
    }

    const user = await getUser();


    return (
        <main className={styles.home}>
            <HeroCarousel />

            <section className={styles.latest}>
                <h2>Our latest additions</h2>

                <div className={styles.productRow}>
                    {productsWithFav.map((product) => (
                        <SingleProduct key={product.id} product={product} userLoggedIn={!!user} />
                    ))}
                </div>
            </section>
        </main>
    );
}
