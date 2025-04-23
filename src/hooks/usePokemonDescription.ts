import { useEffect, useState } from "react"
import { getPokemonDescription } from "../api/PokemonServices";

export const usePokemonDescription = (pokemonId: string) => {
    const [pokemonDescription, setPokemonDescription] = useState<string | null>();

    useEffect(() => {
        getPokemonDescription(pokemonId).then(data => {
            setPokemonDescription(data);
        })
    }, [pokemonId])

    return { pokemonDescription }
}