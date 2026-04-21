"use client";

import { useState } from "react";
import styles from "./products.module.css";
import SingleProduct from "./singleProduct";

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
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const toggleCategory = (cat: string) => {
        setSelectedCategories((prev) =>
            prev.includes(cat)
                ? prev.filter((c) => c !== cat)
                : [...prev, cat]
        );
    };

    const filteredProducts = selectedCategories.length > 0
        ? products.filter((p: ProductWithFav) => {
            const productCats = p.category.split(",").map((c: string) => c.trim());
            return selectedCategories.every((selected) => productCats.includes(selected));
        })
        : products;

    return (
        <main className={styles.page}>
            <h1>Products</h1>

            <div className={styles.filters}>
                <button
                    className={`${styles.filterButton} ${selectedCategories.length === 0 ? styles.active : ""}`}
                    onClick={() => setSelectedCategories([])}
                >
                    All
                </button>

                {categories.map((cat: string) => (
                    <button
                        key={cat}
                        className={`${styles.filterButton} ${selectedCategories.includes(cat) ? styles.active : ""
                            }`}
                        onClick={() => toggleCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {filteredProducts.length === 0 ? (
                <div className={styles.noProducts}>
                    <p>No products match the selected filters.</p>
                </div>
            ) : (
                <div className={styles.grid}>
                    {filteredProducts.map((product: ProductWithFav) => (
                        <SingleProduct key={product.id} product={product} userLoggedIn={userLoggedIn} />
                    ))}
                </div>
            )}
        </main>
    );
}