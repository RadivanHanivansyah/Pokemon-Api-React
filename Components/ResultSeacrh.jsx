import React from "react";
import { hasil, pokemonUrl } from "../api/PokemonApi.js";
import { useState } from "react";
import InfoPokemon from "./InfoPokemon.jsx";

const ResultSeacrh = () => {
  const [pokemonDetail, setPokemonDetail] = useState();
  const [open, setOpen] = useState(false);
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
      {open ? <InfoPokemon data={pokemonDetail} /> : ""}
    </div>
  );
};
export default ResultSeacrh;
