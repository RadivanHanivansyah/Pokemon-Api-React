import React from "react";
import { hasil, pokemonUrl } from "../api/PokemonApi.js";
import { useState } from "react";
import InfoPokemon from "./InfoPokemon.jsx";

const ResultSeacrh = () => {
  const [pokemonDetail, setPokemonDetail] = useState();
  return (
    <div className="flex">
      <div>
        {hasil.map((item, index) => {
          return (
            <button
              className="border"
              onClick={() =>
                pokemonUrl(item.url).then((response) => {
                  setPokemonDetail(response);
                })
              }
              key={index}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      <InfoPokemon data={pokemonDetail} />
    </div>
  );
};
export default ResultSeacrh;
