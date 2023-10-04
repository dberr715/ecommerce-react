import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>UH OH.......</h1>
      <img
        src="https://media.tenor.com/jf0vi2Y-G6oAAAAM/no-no-no-sports.gif"
        alt="Warning gif"
      />
      <p>Error has been made: </p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}
