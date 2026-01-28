"use client"

import { addToBasket } from "@/actions/products";

export default function AddToCartButton(props: { id: number }) {
    return <button className="btn" onClick={() => addToBasket(props.id)}>Add to cart</button>
}