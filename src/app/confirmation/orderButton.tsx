"use client"
import { makeOrder } from "@/actions/products";

export default function OrderButton() {
    return (
        <button
            onClick={makeOrder}
            style={{
                margin: "1rem",
            }}
            className="btn"
        >
            Objednať
        </button>
    )
}
