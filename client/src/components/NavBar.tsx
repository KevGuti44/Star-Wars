import { Link } from "react-router-dom";
import "../styles/navbar.css";
export default function NavBar() {
  return (
    <>
      <nav className="nav_container">
        <Link to="/">Accueil</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/jedi">Jedi</Link>
        <Link to="/sith">Sith</Link>
      </nav>
    </>
  );
}
