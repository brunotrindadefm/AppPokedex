import PokemonDetails from "@/src/components/PokemonDetails/PokemonDetails";
import { useLocalSearchParams } from "expo-router";
import React from "react";

const PokemonDetailsScreen = () => {

    const { id } = useLocalSearchParams();

    return (
        <PokemonDetails pokemonId={id as string} />
    )
}

export default PokemonDetailsScreen;