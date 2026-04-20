"use client";

import { useState } from "react";
import { addProduct } from "@/actions/admin";

export default function AddProductForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [image, setImage] = useState<File | null>(null);

  return (
    <section className="admin-box">
      <h2>Add product</h2>

      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Description" onChange={e => setDescription(e.target.value)} />
      <input placeholder="Category (comma separated)" onChange={e => setCategory(e.target.value)} />
      <input type="number" placeholder="Price" onChange={e => setPrice(Number(e.target.value))} />
      <input type="file" onChange={e => setImage(e.target.files?.[0] ?? null)} />

      <button
        onClick={async () => {
          const res = await addProduct(name, description, category, price, image);
          if (res?.error) alert(res.error);
          else alert("Produkt pridaný");
        }}
      >
        Add product
      </button>
    </section>
  );
}
