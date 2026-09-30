import React from "react";

const SearchBar = () => {
  return (
    <form action="#" method="#" className="flex gap-3 lg:-mt-12">
      <input
        className="bg-slate-100 text-lg focus:outline-none text-black font-medium tracking-wider py-1.5 border border-slate-200 rounded-3xl pl-1.5 w-10/12 md:w-full"
        type="text"
      ></input>
      <button className="border w-1/5 text-lg bg-blue-600 rounded-3xl text-white outline-none px-2">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
