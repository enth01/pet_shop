import styles from "./products.module.css";
import AddToCartButton from "./addToCartButton";
import AddToFavouritesButton from "./addToFavouritesButton";
import RemoveFromFavouritesButton from "./removeFromFavouritesButton";
import Image from "next/image";

interface ProductWithFav {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    is_in_fav: boolean;
}

export default function SingleProduct(props: { product: ProductWithFav; userLoggedIn: boolean }) {
    const { product, userLoggedIn } = props;
    return (
        <div className={styles.card} key={product.id}>
            <Image
                src={"/uploads/" + product.image}
                alt={product.name}
                width={200}
                height={200}
            />

            <h3>{product.name}</h3>
            <p className={styles.description}>{product.description}</p>

            <p className={styles.price}>{(product.price / 100).toFixed(2)} €</p>

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
    );
}