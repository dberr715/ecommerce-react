import { useLoaderData } from "react-router-dom";
import Items from "./items";

export async function loader() {
  const url = "https://fakestoreapi.com/products";
  const itemList = await fetch(url).then((response) => response.json());

  return { itemList };
}

export default function Home() {
  const { itemList } = useLoaderData();
  return (
    <>
      <Items itemList={itemList} />
    </>
  );
}
