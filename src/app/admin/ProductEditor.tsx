"use client";

import type { Products } from "@/lib/db-types";
import { deleteProduct, updateProduct } from "@/actions/admin";
import type { Selectable } from "kysely";
import { useState, useRef, useEffect } from "react";

export default function ProductEditor({
    products,
}: {
    products: Selectable<Products>[];
}) {
    const [editing, setEditing] = useState<Selectable<Products> | null>(null);
    const [newImage, setNewImage] = useState<File | null>(null);

    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (editing) {
            dialogRef.current?.showModal();
        } else {
            dialogRef.current?.close();
        }
    }, [editing]);

    const handleFieldChange = (field: keyof Selectable<Products>, value: string | number) => {
        if (!editing) return;
        setEditing({
            ...editing,
            [field]: value,
        });
    };

    return (
        <section className="admin-box">
            <h2>Products</h2>

            {products.map((p) => (
                <div key={p.id} className="admin-row">
                    <span>{p.name}</span>
                    <button onClick={() => setEditing(p)}>Edit</button>
                    <button onClick={() => deleteProduct(p.id)}>Delete</button>
                </div>
            ))}

            {editing && (
                <dialog
                    ref={dialogRef}
                    onClose={() => setEditing(null)}
                    className="product-modal">
                    <h3>Edit product</h3>

                    <input
                        placeholder="Name"
                        value={editing.name}
                        onChange={(e) => handleFieldChange("name", e.target.value)}
                    />
                    <input
                        placeholder="Description"
                        value={editing.description ?? ""}
                        onChange={(e) => handleFieldChange("description", e.target.value)}
                    />
                    <input
                        placeholder="Category"
                        value={editing.category ?? ""}
                        onChange={(e) => handleFieldChange("category", e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Price"
                        value={editing.price}
                        onChange={(e) => handleFieldChange("price", Number(e.target.value))}
                    />
                    <input
                        type="file"
                        onChange={(e) => {
                            const file = e.target.files?.[0] ?? null;
                            setNewImage(file);
                        }}
                    />

                    <div className="admin-actions">
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
                    </div>
                </dialog>
            )}
        </section>
    );
}