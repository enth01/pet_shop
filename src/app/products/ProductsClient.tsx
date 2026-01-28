"use client";

import Image from "next/image";
import { useState } from "react";
import AddToCartButton from "./addToCartButton";
import AddToFavouritesButton from "./addToFavouritesButton";
import RemoveFromFavouritesButton from "./removeFromFavouritesButton";
import styles from "./products.module.css";

interface ProductWithFav {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  is_in_fav: boolean;
}


interface ProductsClientProps {
  products: ProductWithFav[];
  categories: string[];
  userLoggedIn: boolean;
}

export default function ProductsClient({
  products,
  categories,
  userLoggedIn,
}: ProductsClientProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredProducts = activeCategory
    ? products.filter((p: ProductWithFav) =>
        p.category.split(",").map((c: string) => c.trim()).includes(activeCategory)
      )
    : products;

  return (
    <main className={styles.page}>
      <h1>Products</h1>

      <div className={styles.filters}>
        <button
          className={`${styles.filterButton} ${!activeCategory ? styles.active : ""}`}
          onClick={() => setActiveCategory(null)}
        >
          All
        </button>

        {categories.map((cat: string) => (
          <button
            key={cat}
            className={`${styles.filterButton} ${
              activeCategory === cat ? styles.active : ""
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredProducts.map((product: ProductWithFav) => (
          <div className={styles.card} key={product.id}>
            <Image
              src={"/uploads/" + product.image}
              alt={product.name}
              width={200}
              height={200}
            />

            <h3>{product.name}</h3>
            <p className={styles.description}>{product.description}</p>
            <p className={styles.price}>{product.price} €</p>

            <div className={styles.actions}>
              <AddToCartButton id={product.id} />
              {userLoggedIn &&
                (product.is_in_fav ? (
                  <RemoveFromFavouritesButton id={product.id} />
                ) : (
                  <AddToFavouritesButton id={product.id} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
