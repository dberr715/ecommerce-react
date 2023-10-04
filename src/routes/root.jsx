import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <h1>eCommerce Store</h1>
      <Outlet />
    </>
  );
}
