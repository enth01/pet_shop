"use client"

import { deleteAddress } from "@/actions/user"

export default function DeleteAddressButton() {
    return (
        <button
            style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: "16px" }}
            className="btn"
            onClick={async () => { deleteAddress() }}>
            Delete address
        </button>
    )
}