import { useState, useEffect, useRef } from "react";
import { IPokemon } from "../interfaces/IPokemon";
import { getPokemonById } from "../api/PokemonServices";
import { getFavorites } from "../utils/favoritePokemons";

export const useFavoriteScreen = () => {
    const [pokemons, setPokemons] = useState<IPokemon[]>([]);
    const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
    const [offset, setOffset] = useState(0);
    const [loadingMore, setLoadingMore] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const isFetching = useRef(false);
    const PAGE_SIZE = 20;

    const fetchData = async () => {
        try {
            if (isFetching.current) return;
            isFetching.current = true;
            setLoadingMore(true);

            let allFavoriteIds = favoriteIds;

            if (allFavoriteIds.length === 0) {
                allFavoriteIds = await getFavorites();
                setFavoriteIds(allFavoriteIds);
            }

            const nextIds = allFavoriteIds.slice(offset, offset + PAGE_SIZE);

            const newPokemons = await Promise.all(
                nextIds.map(id => getPokemonById(id.toString()))
            )

            const validNewPokemons = newPokemons.filter((p): p is IPokemon => p !== null);

            setPokemons(prev => [...prev, ...validNewPokemons]);

            const newOffSet = offset + PAGE_SIZE;
            setOffset(newOffSet);

            if (newOffSet > allFavoriteIds.length)
                setHasMore(false);

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