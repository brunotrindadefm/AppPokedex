import { IPokemonEvolutionChain } from "../interfaces/IPokemonDetails/IPokemonEvolutionChain";
import { IPokemonTypeDetails } from "../interfaces/IPokemonDetails/IPokemonTypeDetails";
import axiosInstance from "./axiosInstance";
import { IPokemon } from "@/src/interfaces/IPokemon";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getPokemons = async (offset: number = 0, limit: number = 20, existingIds: Set<number> = new Set()): Promise<IPokemon[]> => {
    const response = await axiosInstance.get(`pokemon?limit=${limit}&offset=${offset}`);
    const pokemons: IPokemon[] = response.data.results;

    const pokemonDetailsPromises = pokemons.map((pokemon) =>
        axiosInstance.get(pokemon.url)
    );
    const detailsResponses = await Promise.all(pokemonDetailsPromises);
    const pokemonDetails = detailsResponses.map((res) => res.data);

    const newPokemons = pokemonDetails.filter(pokemon => !existingIds.has(pokemon.id));

    return newPokemons;
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

export const getPokemonBySearch = async (search: string, offset: number = 0, limit: number = 20): Promise<IPokemon[] | null> => {
    try {
        const allPokemons = await getAllPokemons();
        const normalizedQuery = search.toLowerCase();

        const filtered = allPokemons?.filter(p =>
            p.name.includes(normalizedQuery) ||
            p.url.split("/").filter(Boolean).pop()?.includes(normalizedQuery)
        )

        if (!filtered || filtered.length === 0) return [];

        const sliced = filtered.slice(offset, offset + limit);

        const promises = sliced.map(async p => {
            try {
                const res = await axiosInstance.get(p.url);
                return res.data;
            } catch {
                return null;
            }
        });

        if (!promises) return null;

        const response = await Promise.all(promises);
        return response.filter(Boolean) as IPokemon[];
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

export const getPokemonEvolutionChain = async (pokemonId: string): Promise<IPokemonEvolutionChain | null> => {
    try {
        const response = await axiosInstance.get(`pokemon-species/${pokemonId}`);

        const evolutionChainUrl = response.data.evolution_chain?.url;

        if (!evolutionChainUrl)
            return null;

        const evolutionResponse = await axiosInstance.get(evolutionChainUrl);

        return evolutionResponse.data;
    } catch (err) {
        console.log('Error searching pokemon evolution chain: ', err);
        return null;
    }
}

const getAllPokemons = async (): Promise<IPokemon[] | null> => {
    try {
        const cached = await AsyncStorage.getItem('allPokemons');
        if (cached) return JSON.parse(cached);

        let allPokemons: IPokemon[] = [];
        let url = `pokemon?limit=200&offset=0`;

        while (url) {
            const response = await axiosInstance.get(url);
            allPokemons = [...allPokemons, ...response.data.results];
            url = response.data.next?.replace('https://pokeapi.co/api/v2/', '') || '';
        }

        await AsyncStorage.setItem('allPokemons', JSON.stringify(allPokemons))
        return allPokemons;
    } catch (err) {
        console.log('Error fetching all pokemons:', err);
        return null;
    }
}

export const getPreviousAndNextPokemon = async (pokemonId: string): Promise<IPokemon[] | null> => {
    const id = Number(pokemonId);

    if (id < 1 || isNaN(id)) return null;

    const previousId = Math.max(1, id - 1);
    const nextId = id + 1;

    try {
        const response = await Promise.all([
            getPokemonById(previousId.toString()),
            getPokemonById(nextId.toString())
        ]);

        const validPokemons = response.filter((p): p is IPokemon => p !== null)

        return validPokemons;
    } catch (err) {
        console.log('Error fetching previous and next pokemon:', err);
        return null;
    }
}