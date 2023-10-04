import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const url = `https://fakestoreapi.com/products/1`;

  // const url = `https://fakestoreapi.com/products/${params.itemId}`;
  const item = await fetch(url).then((response) => response.json());

  return { item };
}

export default function items() {
  const { item } = useLoaderData();

  return (
    <>
      <p>Item:{item.title}</p>
      <p>Cost:${item.price}</p>
      <p>Description:{item.description}</p>
      <p>Category:{item.category}</p>
      <img src={item.image} />
      <p>Rating....</p>
    </>
  );
}
