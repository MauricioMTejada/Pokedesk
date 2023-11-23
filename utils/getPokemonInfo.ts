import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";


export const getPokemonInfo = async( nmeOrId: string ) => {

    const { data }  = await pokeApi.get<Pokemon>(`/pokemon/${nmeOrId}`);

    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites
    }
}