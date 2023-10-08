import React from "react";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const url = `https://fakestoreapi.com/products/category/${params.category}`;
  const items = await fetch(url).then((response) => response.json());
  return { items };
}

export default function Items() {
  const { items } = useLoaderData();
  return (
    <>
      <h2>Products</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}
