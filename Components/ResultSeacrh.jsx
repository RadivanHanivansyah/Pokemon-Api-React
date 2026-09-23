import React from "react";
import { hasil } from "../api/PokemonApi.js";

const ResultSeacrh = () => {
  return (
    <div>
      {hasil.map((item, index) => {
        return <p key={index}>{item.name}</p>;
      })}
    </div>
  );
};

export default ResultSeacrh;
