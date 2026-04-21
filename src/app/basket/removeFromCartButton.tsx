"use client";

import { removeFromBasket } from "@/actions/products";

export default function RemoveFromCartButton({ id }: { id: number }) {
    return (
        <button
            onClick={() => removeFromBasket(id)}
            className="btn"
            style={{
                backgroundColor: "#4CAF50",
                color: "white",
                padding: "6px 12px",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
            }}
        >
            Remove
        </button>
    );
}
