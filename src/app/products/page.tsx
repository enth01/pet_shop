import getDB from "@/lib/db";
import { getUser } from "@/actions/user";
import { isInFavourites } from "@/actions/products";
import ProductsClient from "./ProductsClient";

export default async function ProductsPage() {
    const products = await getDB().selectFrom("products").selectAll().execute();
    const user = await getUser();

    const productsWithFav = [];

    for (const product of products) {
        const is_in_fav = await isInFavourites(product.id);
        productsWithFav.push({ ...product, is_in_fav });
    }

    const categorySet = new Set<string>();

    products.forEach((product) => {
        product.category
            .split(",")
            .map((c) => c.trim())
            .forEach((c) => categorySet.add(c));
    });

    const categories = Array.from(categorySet);

    return (
        <ProductsClient
            products={productsWithFav}
            categories={categories}
            userLoggedIn={!!user}
        />
    );
}
