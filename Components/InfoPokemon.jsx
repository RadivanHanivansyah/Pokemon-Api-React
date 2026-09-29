export default function InfoPokemon({ data }) {
  console.log(data.name);
  return (
    <div className="border">
      <h1 className="text-red-500 text-4xl">{data.name}</h1>
    </div>
  );
}
