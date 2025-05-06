import PokemonDetails from "@/src/components/PokemonDetails/PokemonDetail";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const PokemonDetailsScreen = () => {

    const { id } = useLocalSearchParams();

    return (
        <PokemonDetails pokemonId={id as string} />
    )
}

export default PokemonDetailsScreen;