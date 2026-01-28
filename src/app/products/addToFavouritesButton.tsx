"use client"

import { addToFavourites } from "@/actions/products"

export default function AddToFavouritesButton(props: { id: number }) {
    return <button onClick={() => addToFavourites(props.id)}>Add to favourites</button>
}