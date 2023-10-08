import React from "react";
import { useLoaderData, Link } from "react-router-dom";

export async function loader() {
  const url = `https://fakestoreapi.com/products/categories`;
  const categories = await fetch(url).then((response) => response.json());
  return { categories };
}

export default function Categories() {
  const { categories } = useLoaderData();
  return (
    <>
      <div id="categories">
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <Link to={`/categories/${category}`}> {category}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
