import React from "react";
import { Text, View } from "react-native";
import PokemonCard from "../PokemonCard/PokemonCard";
import { IPokemonSearchProps } from "@/src/interfaces/IPokemonSearchProps";
import { usePokemonSearch } from "@/src/hooks/usePokemonSearch";

const PokemonSearch = ({ query }: IPokemonSearchProps) => {

    const { pokemon, loading } = usePokemonSearch(query);

    return (
        <View style={{ flex: 1, display: "flex", alignItems: "center" }}>
            {pokemon ? (
                <PokemonCard pokemon={pokemon} />
            ) : (
                <Text style={{ textAlign: 'center', marginTop: 20 }}>
                    Nenhum Pokémon encontrado.
                </Text>
            )}
        </View>
    )
}

export default PokemonSearch;