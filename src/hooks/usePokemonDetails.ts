import { getPokemonById } from "../api/PokemonServices";
import { useState, useEffect } from "react";
import { IPokemon } from "../interfaces/IPokemon";

export const usePokemonDetails = (pokemonId: string) => {
    const [pokemon, setPokemon] = useState<IPokemon | null>(null);

    useEffect(() => {
        getPokemonById(pokemonId).then(data => {
            setPokemon(data);
        })
    }, [pokemonId])

    return { pokemon };
};