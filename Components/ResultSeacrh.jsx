import React from "react";
import { hasil, pokemonUrl } from "../api/PokemonApi.js";
import { useState } from "react";
import InfoPokemon from "./InfoPokemon.jsx";

const ResultSeacrh = () => {
  const [pokemonDetail, setPokemonDetail] = useState();
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-wrap items-start gap-3 lg:flex-nowrap lg:gap-8 mt-6">
      <div className="w-full lg:w-1/2">
        <h3 className="font-medium text-base mb-2">Suggestion:</h3>
        <div className="grid md:grid-cols-5 grid-cols-4 max-sm:grid-cols-4 gap-2">
          {hasil.map((item, index) => {
            return (
              <button
                className="border rounded-2xl hover:cursor-pointer p-1 truncate font-medium bg-yellow-400"
                onClick={() =>
                  pokemonUrl(item.url).then((response) => {
                    setPokemonDetail(response);
                    setOpen(true);
                  })
                }
                key={index}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      </div>
      <div className="w-full lg:w-1/4">
        {open ? <InfoPokemon data={pokemonDetail} /> : ""}
      </div>
    </div>
  );
};
export default ResultSeacrh;
