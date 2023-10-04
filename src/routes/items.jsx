import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  // const url = `https://fakestoreapi.com/products/1`;

  const url = `https://fakestoreapi.com/products/${params.itemId}`;
  const item = await fetch(url).then((response) => response.json());
  console.log(item);
  return { item };
}

export default function Items() {
  const { item } = useLoaderData();
console.log(item.title);
  return (
    <>
      <p>Item: {item.title}</p>
      <p>Category: {item.category}</p>
      <p>Cost: ${item.price}</p>
      <p>Description: {item.description}</p>

      <img src={item.image} />
      <p>Rating....</p>
    </>
  );
}
