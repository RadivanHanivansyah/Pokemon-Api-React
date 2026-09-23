import axios from "axios"

const pokemonApi = await axios.get(
    "https://pokeapi.co/api/v2/ability/?offset=0&limit=35",
);

export const hasil = pokemonApi.data.results;

console.log( hasil )





