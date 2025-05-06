import { getPokemonBySearch } from "../api/PokemonServices";
import { useState, useEffect, useRef } from "react";
import { IPokemon } from "../interfaces/IPokemon";

export const usePokemonSearch = (search: string) => {
    const [pokemons, setPokemons] = useState<IPokemon[]>([]);
    const [offset, setOffset] = useState(0);
    const [loadingMore, setLoadingMore] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const isFetching = useRef(false);

    const fetchSearchResults = async () => {
        if (isFetching.current || !search) return;

        isFetching.current = true;
        setLoadingMore(true);

        try {
            const results = await getPokemonBySearch(search, offset, 20);

            if (!results || results.length === 0) {
                setHasMore(false);
                return;
            }

            setPokemons(prev => {
                const unique = results.filter(p => !prev.some(existing => existing.id === p.id));
                return [...prev, ...unique];
            })

            setOffset(prev => prev + 20);

        } catch (err) {
            console.log("Erro na busca paginada:", err);
            setHasMore(false);
        } finally {
            setLoadingMore(false);
            isFetching.current = false;
        }
    }

    useEffect(() => {
        setPokemons([]);
        setOffset(0);
        setHasMore(true);
        fetchSearchResults();
    }, [search]);

    return {
        pokemons,
        fetchMore: fetchSearchResults,
        loadingMore,
        hasMore,
    };
};