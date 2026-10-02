import React from "react";
import { searchPokemon } from "../api/PokemonApi";
import { useState } from "react";
import InfoPokemon from "./InfoPokemon";

const SearchBar = ({
  setPokemonDetail,
  setOpen,
  setName,
  name,
  setIsTrueName,
}) => {
  function handlechange(e) {
    setName(() => e.target.value);
    {
      e.target.value === "" ? setIsTrueName(false) : setIsTrueName(true);
    }
  }
  function handleSubmit() {
    searchPokemon({ name }).then((response) => {
      setPokemonDetail(response);
      setOpen(true);
    });
  }
  return (
    <div>
      <form
        action="#"
        onClick={(e) => e.preventDefault()}
        method="#"
        className="flex gap-3 lg:-mt-16 lg:mb-8.5"
      >
        <input
          className="bg-slate-100 text-lg focus:outline-none text-black font-medium tracking-wider py-1.5 border border-slate-200 rounded-3xl pl-1.5 w-10/12 md:w-full"
          onChange={(e) => handlechange(e)}
          type="text"
        ></input>
        <button
          type="submit"
          className="border hover:cursor-pointer w-1/5 text-lg bg-blue-600 rounded-3xl text-white outline-none px-2"
          onClick={() => handleSubmit()}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
