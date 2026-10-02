import React from "react";
import { hasil, pokemonUrl } from "../api/PokemonApi.js";
import { useState } from "react";
import InfoPokemon from "./InfoPokemon.jsx";

const ResultSeacrh = ({ setPokemonDetail, setOpen, isTrueName, name }) => {
  return (
    <div>
      <h3 className="font-medium text-base mb-2">Suggestion:</h3>
      <div className="suggestion grid md:grid-cols-5 grid-cols-4 max-sm:grid-cols-4 gap-2">
        {isTrueName ? (
          <button className="border rounded-2xl hover:cursor-pointer p-1 truncate font-medium bg-yellow-400">
            {name}
          </button>
        ) : (
          hasil.map((item, index) => {
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
          })
        )}
      </div>
    </div>
  );
};
export default ResultSeacrh;
