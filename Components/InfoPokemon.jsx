export default function InfoPokemon({ data }) {
  return (
    <div className="border-4 lg:-mt-5 rounded-xl  px-3 py-2 border-yellow-400 h-full">
      <div className="info-pokemon mb-2 font-semibold tex-black flex justify-between items-center">
        <h1 className="text-xl">{data.name}</h1>
        <h2 className="hp font-semibold text-lg">
          <span className="mr-1 text-xs uppercase font-bold">hp</span>
          {data.base_experience}
        </h2>
      </div>
      <div className="detail-info border w-full mb-2 bg-slate-100 rounded-xl border-black">
        <div className="image flex justify-center items-center py-4 lg:py-7">
          <img className="w-1/4" src={data.sprites.front_default} alt="" />
        </div>
        <div className="size rounded-xl flex w-full justify-center gap-3 capitalize bg-slate-200 py-1">
          <h3>height: {data.height}</h3>
          <h3>weight: {data.weight}</h3>
        </div>
      </div>
      <div className="type">
        <h3 className="border bg-slate-200 rounded-2xl font-medium w-1/4 text-center py-1 px-2">
          {data.types[0].type.name}
        </h3>
      </div>
      <div className="abilty py-2 lg:pb-3 lg:pt-3.5">
        {data.abilities.slice(0, 2).map((item, index) => {
          return (
            <h3 className="text-lg" key={index}>
              {item.ability.name}
            </h3>
          );
        })}
      </div>
    </div>
  );
}
