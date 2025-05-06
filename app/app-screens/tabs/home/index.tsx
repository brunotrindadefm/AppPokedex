import React from "react";
import PokemonList from "@/src/components/PokemonList/PokemonList";
import { usePokemonList } from "@/src/hooks/usePokemonList";
import { View } from "react-native";

const HomeScreen = () => {

  const { pokemons, fetchMore, loadingMore, hasMore } = usePokemonList();

  return (
    <View style={{ flex: 1, display: "flex", alignItems: "center" }}>
      <PokemonList pokemons={pokemons} hasMore={hasMore} fetchMore={fetchMore} loadingMore={loadingMore} />
    </View>
  );
};

export default HomeScreen