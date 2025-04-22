import { usePokemonDetails } from "@/src/hooks/usePokemonDetails";
import { IPokemonDetailsProps } from "@/src/interfaces/IPokemonDetailsProps";
import React from "react";
import { Text } from "react-native";

const PokemonDetails = ({ pokemonId }: IPokemonDetailsProps) => {

    const { pokemon, loading } = usePokemonDetails(pokemonId as string);

    return (
        <Text>
            Pokemon: {pokemon?.name}
        </Text>
    )
}

export default PokemonDetails;