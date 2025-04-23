import { IPokemonTypeDetails } from "../interfaces/IPokemonTypeDetails";
import axiosInstance from "./axiosInstance";
import { IPokemon } from "@/src/interfaces/IPokemon";

export const getPokemons = async (offset: number = 0, limit: number = 20): Promise<IPokemon[]> => {
    const response = await axiosInstance.get(`pokemon?limit=${limit}&offset=${offset}`);
    const pokemons = response.data.results;

    const details: IPokemon[] = [];

    for (const pokemon of pokemons) {
        try {
            const res = await axiosInstance.get(pokemon.url);
            const img = res.data?.sprites?.other?.['official-artwork']?.front_default;

            if (img) details.push(res.data);

            await new Promise(res => setTimeout(res, 100));
        } catch (err) {
            console.log(`Error searching: ${pokemon.name}`, err);
        }
    }

    return details;
};

export const getPokemonById = async (pokemonId: string): Promise<IPokemon | null> => {
    try {
        const response = await axiosInstance.get(`pokemon/${pokemonId}`);
        return response.data;
    } catch (err) {
        console.error(`Error searching pokemon by id ${pokemonId}:`, err);
        return null;
    }
};

export const getPokemonBySearch = async (search: string): Promise<IPokemon | null> => {
    try {
        const response = await axiosInstance.get(`pokemon/${search}`);
        return response.data;
    } catch (err) {
        console.error(`Error searching: ${search}:`, err);
        return null;
    }
}

export const getPokemonDescription = async (pokemonId: string): Promise<string | null> => {
    try {
        const response = await axiosInstance.get(`pokemon-species/${pokemonId}`);
        const flavor = response.data.flavor_text_entries.find((entry: any) => entry.language.name === 'en')
        return flavor?.flavor_text || null;
    } catch (err) {
        console.error(`Error searching pokemon by id: ${pokemonId}:`, err);
        return null
    }
}

export const getPokemonTypeDetails = async (pokemonType: string): Promise<IPokemonTypeDetails | null> => {
    try {
        const response = await axiosInstance.get(`type/${pokemonType}`);
        return response.data;
    } catch (err) {
        console.log('Error searching pokemon type details: ', err);
        return null;
    }
}