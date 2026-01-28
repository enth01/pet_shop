"use client"
import { updateAddress } from "@/actions/user";

export default function SaveAddressButton() {
    async function save() {
        const form = new FormData();
        ["ulica","popisne_cislo_domu","mesto","krajina","telefon","email","meno","priezvisko"].forEach(id => {
            const el = document.getElementById(id) as HTMLInputElement;
            if (el) form.append(id, el.value);
        });
        await updateAddress(form);
        alert("Address saved!");
    }

    return (
        <button
            onClick={save}
            className="bg-green-500 text-white px-6 py-2 rounded-[0.75rem] hover:bg-green-600"
        >
            Save Address
        </button>
    )
}
