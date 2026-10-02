import axios from "axios"
import InfoPokemon from "../Components/InfoPokemon";

const pokemonApi = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=35",
);
export async function pokemonUrl( url ) {
    const pokemonDetail = await axios.get(
        url
    )
    console.log( pokemonDetail.data )
    return pokemonDetail.data
}
export async function searchPokemon( { name } ) {
    const result = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${ name }`
    )
    return result.data
}

export const hasil = pokemonApi.data.results;






