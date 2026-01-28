"use client";

import { useState } from "react";
import type { Products } from "@/lib/db-types";
import { deleteProduct, updateProduct } from "@/actions/admin";
import type { Selectable } from "kysely";

export default function ProductEditor({
  products,
}: {
  products: Selectable<Products>[];
}) {
  const [editing, setEditing] = useState<Selectable<Products> | null>(null);
  const [newImage, setNewImage] = useState<File | null>(null);

  return (
    <section className="admin-box">
      <h2>Products</h2>

      {products.map(p => (
        <div key={p.id} className="admin-row">
          <span>{p.name}</span>
          <button onClick={() => setEditing(p)}>Edit</button>
          <button onClick={() => deleteProduct(p.id)}>Delete</button>
        </div>
      ))}

      {editing && (
        <dialog open>
          <h3>Edit product</h3>

          <input
            defaultValue={editing.name}
            onChange={e => (editing.name = e.target.value)}
          />
          <input
            defaultValue={editing.description}
            onChange={e => (editing.description = e.target.value)}
          />
          <input
            defaultValue={editing.category}
            onChange={e => (editing.category = e.target.value)}
          />
          <input
            type="number"
            defaultValue={editing.price}
            onChange={e => (editing.price = Number(e.target.value))}
          />
          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files?.[0] ?? null;
              setNewImage(file);
            }}
          />

          <button
            onClick={async () => {
              if (!editing) return;

              await updateProduct(editing.id, {
                name: editing.name,
                description: editing.description,
                category: editing.category,
                price: editing.price,
                image: newImage ? newImage : undefined,
              });

              setEditing(null);
              setNewImage(null);
            }}
          >
            Save
          </button>
          <button onClick={() => setEditing(null)}>Cancel</button>
        </dialog>
      )}
    </section>
  );
}
