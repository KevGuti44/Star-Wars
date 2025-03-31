import "../styles/homepage.css";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <>
      <h1>Star Wars</h1>
      <p>
        L'histoire de Star Wars, se déroule dans une galaxie qui est le théâtre
        d'affrontements entre les Chevaliers Jedi et les Seigneurs Sith,
        personnes antagonistes sensibles à la Force, un champ énergétique
        mystérieux leur procurant des pouvoirs psychiques. Les Jedi maîtrisent
        le Côté lumineux de la Force, pouvoir bénéfique et défensif, pour
        maintenir la paix dans la galaxie. Les Sith utilisent le Côté obscur,
        pouvoir nuisible et destructeur, pour leurs usages personnels et pour
        dominer la galaxie.
      </p>
      <section className="power-container">
        <div>
          <Link to="/jedi">
            <img className="the-jedi" src={"la-force.jpg"} alt="" />
            La Force
          </Link>
        </div>

        <div>
          <Link to={"/sith"}>
            <img className="the-sith" src={"obscur.jpg"} alt="" />
            Le côté Obscur
          </Link>
        </div>
      </section>
    </>
  );
}
