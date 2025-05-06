import React from "react";
import { Text, View } from "react-native";
import { IPokemonSearchProps } from "@/src/interfaces/IPokemonSearchProps";
import { usePokemonSearch } from "@/src/hooks/usePokemonSearch";
import PokemonList from "../PokemonList/PokemonList";

const PokemonSearch = ({ query }: IPokemonSearchProps) => {

    const { pokemons, hasMore, loadingMore, fetchMore } = usePokemonSearch(query);

    return (
        <View style={{ flex: 1, display: "flex", alignItems: "center" }}>
            {pokemons.length > 0 ? (
                <PokemonList pokemons={pokemons} hasMore={hasMore} loadingMore={loadingMore} fetchMore={fetchMore} />
            ) : (
                <Text style={{ textAlign: 'center', marginTop: 20 }}>
                    Nenhum Pokémon encontrado.
                </Text>
            )}
        </View>
    )
}

export default PokemonSearch;