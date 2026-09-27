import axios from "axios"
import InfoPokemon from "../Components/InfoPokemon";

const pokemonApi = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=35",
);
export async function pokemonUrl( url ) {
    const pokemonDetail = await axios.get(
        url
    )
    return pokemonDetail.data
}


export const hasil = pokemonApi.data.results;






