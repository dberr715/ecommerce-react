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
      <h4>Products</h4>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <div>
              <img src={item.image} alt={item.title} />
              <div id="info">
                <h3>{item.title}</h3>
                <p>Price: {item.price}</p>
                <p>{item.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
