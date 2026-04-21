"use client"
import { makeTemporaryOrder } from "@/actions/products";

export default function LinkToConfirmation() {
    async function go() {
        const ulica = (document.getElementById("ulica") as HTMLInputElement).value;
        const popisne_cislo_domu = (document.getElementById("popisne_cislo_domu") as HTMLInputElement).value;
        const mesto = (document.getElementById("mesto") as HTMLInputElement).value;
        const zip_code = (document.getElementById("zip_code") as HTMLInputElement).value;
        const krajina = (document.getElementById("krajina") as HTMLInputElement).value;
        const telefon = (document.getElementById("telefon") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const meno = (document.getElementById("meno") as HTMLInputElement).value;
        const priezvisko = (document.getElementById("priezvisko") as HTMLInputElement).value;

        const fields = {
            "Meno": meno,
            "Priezvisko": priezvisko,
            "Ulica": ulica,
            "Súpisné číslo": popisne_cislo_domu,
            "Mesto": mesto,
            "PSČ": zip_code,
            "Krajina": krajina,
            "Telefón": telefon,
            "Email": email
        };
        
        for (const [label, value] of Object.entries(fields)) {
            if (!value || (value.trim() === "")) {
                alert(`Pole "${label}" je prazdne.`);
                return; 
            }
        }

        await makeTemporaryOrder(
            ulica,
            popisne_cislo_domu,
            mesto,
            zip_code,
            krajina,
            telefon,
            email,
            meno,
            priezvisko
        );
    }

    return (
        <button
            onClick={go}
            className="btn"
            type="button"
        >
            Continue to Confirmation
        </button>
    )
}
