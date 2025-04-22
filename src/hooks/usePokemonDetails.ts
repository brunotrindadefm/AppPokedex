import { getPokemonById } from "../api/PokemonServices";
import { useState, useEffect } from "react";
import { IPokemon } from "../interfaces/IPokemon";

export const usePokemonDetails = (pokemonId: string) => {
    const [pokemon, setPokemon] = useState<IPokemon | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getPokemonById(pokemonId).then(data => {
            setPokemon(data);
            setLoading(false);
        })
    }, [pokemonId])

    return { pokemon, loading };
};