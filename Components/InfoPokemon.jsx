export default function InfoPokemon(data) {
  console.log(data.data.name);
  return (
    <div className="border h-2.5">
      <h1 className="text-red-500 text-4xl">{data.data.base_experience}</h1>
    </div>
  );
}
