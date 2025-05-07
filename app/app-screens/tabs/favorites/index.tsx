import PokemonList from "@/src/components/PokemonList/PokemonList";
import { useFavoriteScreen } from "@/src/hooks/useFavoriteScreen";
import React from "react";
import { View } from "react-native";

const FavoritesScreen = () => {

  const { pokemons, fetchMore, loadingMore, hasMore } = useFavoriteScreen();

  return (
    <View style={{ flex: 1, display: "flex", alignItems: "center", paddingVertical: 5 }}>
      <PokemonList pokemons={pokemons} hasMore={hasMore} fetchMore={fetchMore} loadingMore={loadingMore} />
    </View>
  );
};

export default FavoritesScreen;
