import { useState, useEffect } from "react";
import { isFavorite, toggleFavorites } from "../utils/favoritePokemons";

export const useFavoritePokemon = (pokemonId: number) => {

    const [isFavoriteState, setIsFavoriteState] = useState(false);

    useEffect(() => {
        const loadFavoriteStatus = async () => {
            const isFav = await isFavorite(pokemonId);
            setIsFavoriteState(isFav);
        }
        loadFavoriteStatus();
    }, [pokemonId])

    const handleToggleFavorite = async () => {
        if (pokemonId === undefined) return;

        const result = await toggleFavorites(pokemonId);
        setIsFavoriteState(result);
    }

    return {
        isFavorite: isFavoriteState,
        toggleFavorite: handleToggleFavorite
    }
}