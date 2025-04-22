import { usePokemonDetails } from "@/src/hooks/usePokemonDetails";
import { IPokemonDetailsProps } from "@/src/interfaces/IPokemonDetailsProps";
import React from "react";
import { Text, View } from "react-native";
import SimpleLoader from "../Loader/Loader";

const PokemonDetails = ({ pokemonId }: IPokemonDetailsProps) => {

    const { pokemon, loading } = usePokemonDetails(pokemonId as string);

    return (
        <View style={{ flex: 1 }}>
            {loading ?
                <SimpleLoader />
                : (
                    <Text>Pokemon: {pokemon?.name}</Text>
                )
            }
        </View>
    )
}

export default PokemonDetails;