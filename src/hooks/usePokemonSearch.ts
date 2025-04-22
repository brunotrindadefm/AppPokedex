import { getPokemonBySearch } from "../api/PokemonServices";
import { useState, useEffect } from "react";
import { IPokemon } from "../interfaces/IPokemon";

export const usePokemonSearch = (search: string) => {
    const [pokemon, setPokemon] = useState<IPokemon | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getPokemonBySearch(search).then(data => {
            setPokemon(data);
            setLoading(false);
        })
    },[search]);

    return { pokemon, loading };
};