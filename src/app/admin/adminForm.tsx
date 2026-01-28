"use client"

import { useState } from "react"
import AddProduct from "./AddProductForm";

export default function AdminForm() {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState<File | null>(null)

    return       <form
        className="flex flex-col gap-4 w-80 bg-gray-100 p-6 rounded-xl shadow"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="flex flex-col">
          name
          <br />
          <input
            type="text"
            className="border rounded p-2 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label className="flex flex-col">
          description
          <br />
          <input
            type="text"
            className="border rounded p-2 w-full"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label className="flex flex-col">
          category
          <br />
          <input
            type="text"
            className="border rounded p-2 w-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label className="flex flex-col">
          price
          <br />
          <input
            type="number"
            className="border rounded p-2 w-full"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
          <br />
          <br />
          <label className="flex flex-col">
            image
            <br />
            <input
              type="file"
              accept="image/*"
              className="border rounded p-2 w-full"
              onChange={(e) => setImage(e.target.files?.[0] ?? null)}
            />
        </label>
        <AddProduct name={name} description={description} category={category} price={Number(price)} image={image} />
      </form>
}