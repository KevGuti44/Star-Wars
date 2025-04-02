import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/jedi">Jedi</Link>
        <Link to="/sith">Sith</Link>
      </nav>
    </>
  );
}
