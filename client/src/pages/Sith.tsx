import { useLoaderData } from "react-router-dom";
import AllJedi from "../components/AllJedi";

export default function Jedi() {
  const jedis = useLoaderData() as JediTypes[];
  return (
    <>
      <div>
        {jedis.map((jedi) => (
          <AllJedi key={jedi.id} jedi={jedi} />
        ))}
      </div>
    </>
  );
}
