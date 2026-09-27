import React from "react";
import { hasil, pokemonUrl } from "../api/PokemonApi.js";
import { useState } from "react";

const ResultSeacrh = () => {
  const [data, setData] = useState();
  return (
    <div>
      {hasil.map((item, index) => {
        return (
          <button
            className="border"
            onClick={() => pokemonUrl(item.url)}
            key={index}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
};
export default ResultSeacrh;
