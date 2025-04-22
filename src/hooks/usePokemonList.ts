import { getPokemons } from "../api/PokemonServices";
import { useState, useEffect, useRef } from "react";
import { IPokemon } from "../interfaces/IPokemon";

export const usePokemonList = () => {
    const [pokemons, setPokemons] = useState<IPokemon[]>([]);
    const [offset, setOffset] = useState(0);
    const [loadingMore, setLoadingMore] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const isFetching = useRef(false);

    const fetchData = async () => {
        try {
            if (isFetching.current) return;
            isFetching.current = true;
            setLoadingMore(true);

            const newPokemons = await getPokemons(offset, 20);
            if (newPokemons.length === 0) {
                setHasMore(false);
                return;
            }

            setPokemons(prev => {
                const news = newPokemons.filter(p => !prev.some(old => old.id === p.id));
                return [...prev, ...news];
            });

            setOffset(prev => prev + 20);
        } catch (error) {
            console.log(error);
        } finally {
            setLoadingMore(false);
            isFetching.current = false;
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { pokemons, fetchMore: fetchData, loadingMore, hasMore, };
};