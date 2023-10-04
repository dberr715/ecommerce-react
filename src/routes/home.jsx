import { useLoaderData, Link } from "react-router-dom";
import Items from "./items";

export async function loader() {
  const url = "https://fakestoreapi.com/products";
  const itemList = await fetch(url).then((response) => response.json());
  console.log(itemList);
  return { itemList };
}

export default function Home() {
  const { itemList } = useLoaderData();
  return (
    <>
      <ul>
        {itemList.map((item) => (
          <li key={item.id}>
            <Link to={`items/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
      {/* <Items itemList={itemList} /> */}
    </>
  );
}
