import { useEffect, useState } from "react";
import { IPokemonEvolutionChain } from "../interfaces/IPokemonDetails/IPokemonEvolutionChain";
import { getPokemonEvolutionChain } from "../api/PokemonServices";

export const usePokemonEvolutionChain = (pokemonId: string) => {
    const [pokemonEvolutionChain, setPokemonEvolutionChain] = useState<IPokemonEvolutionChain | null>(null);

    useEffect(() => {
        getPokemonEvolutionChain(pokemonId).then((data) => {
            setPokemonEvolutionChain(data);
        })
    }, [pokemonId])

    return { pokemonEvolutionChain };
};