import React from "react";
import { Text, View } from "react-native";
import { IPokemonSearchProps } from "@/src/interfaces/IPokemonSearchProps";
import { usePokemonSearch } from "@/src/hooks/usePokemonSearch";
import PokemonList from "../PokemonList/PokemonList";
import SimpleLoader from "../Loader/Loader";

const PokemonSearch = ({ query }: IPokemonSearchProps) => {

    const { pokemons, hasMore, loadingMore, fetchMore } = usePokemonSearch(query);

    if (loadingMore && pokemons.length === 0)
        return <SimpleLoader />;

    return (
        <View style={{ flex: 1, display: "flex", alignItems: "center", paddingVertical: 3, paddingHorizontal: 10 }}>
            {pokemons.length > 0 ? (
                <PokemonList pokemons={pokemons} hasMore={hasMore} loadingMore={loadingMore} fetchMore={fetchMore} />
            ) : (
                <Text style={{ textAlign: 'center', marginTop: 40 }}>
                    Nenhum Pokémon encontrado.
                </Text>
            )}
        </View>
    )
}

export default PokemonSearch;