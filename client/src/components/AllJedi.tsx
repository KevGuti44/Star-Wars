import "../styles/alljedi.css";
export default function AllJedi({ jedi }: JediProps) {
  return (
    <>
      <div className="cards-jedi">
        <p>{jedi.name}</p>
        <p>Age: {jedi.age} ans</p>
        <p>{jedi.description}</p>
        <p>{jedi.power}</p>
        <img src={jedi.img} alt={jedi.name} />
      </div>
    </>
  );
}
