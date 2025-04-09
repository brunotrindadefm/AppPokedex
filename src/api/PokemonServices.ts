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
            console.log(`Erro ao buscar ${pokemon.name}`, err);
        }
    }

    return details;
};
