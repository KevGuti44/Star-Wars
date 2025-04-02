import { useLoaderData } from "react-router-dom";
// import "../styles/dashboard.css";
import "../styles/alljedi.css";
import AllJedi from "./AllJedi";
export default function MainDashboard() {
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
