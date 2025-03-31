import { useLoaderData } from "react-router-dom";
// import "../styles/dashboard.css";

export default function MainDashboard() {
  const { jedis } = useLoaderData() as { jedis: JediTypes[] };

  return (
    <>
      {jedis.map((jedi) => (
        <div className="dashboard-jedi" key={jedi.id}>
          <img src={jedi.img} alt="" />
          <p>{jedi.name}</p>
        </div>
      ))}
    </>
  );
}
