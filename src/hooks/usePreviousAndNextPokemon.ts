import { useEffect, useState } from "react";
import { IPokemon } from "../interfaces/IPokemon";
import { getPreviousAndNextPokemon } from "../api/PokemonServices";

export const usePreviousAndNextPokemons = (pokemonId: string) => {

    const [previousAndNextPokemons, setPreviousAndNextPokemons] = useState<IPokemon[]>([])

    useEffect(() => {
        const loadPreviousAndNextPokemons = async () => {
            try {
                const pokemons = await getPreviousAndNextPokemon(pokemonId);
                if (pokemons != null)
                    setPreviousAndNextPokemons(pokemons)
            } catch(err) {
                console.log('Error searching previous and next pokemons: ', err);
                setPreviousAndNextPokemons([]);
            }
        }
        loadPreviousAndNextPokemons();
    }, [pokemonId])

    return { previousAndNextPokemons }
};