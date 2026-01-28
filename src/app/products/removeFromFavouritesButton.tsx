"use client"

import { removeFromFavourites } from "@/actions/products"

export default function RemoveFromFavouritesButton(props: { id: number }) {
    return <button onClick={() => removeFromFavourites(props.id)}>Remove from favourites</button>
}