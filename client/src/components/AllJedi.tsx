export default function AllJedi({ jedi }: JediProps) {
  return (
    <>
      <div>
        <p>{jedi.name}</p>
        <p>{jedi.age}</p>
        <p>{jedi.description}</p>
        <p>{jedi.power}</p>
        <img src={jedi.img} alt={jedi.name} />
      </div>
    </>
  );
}
