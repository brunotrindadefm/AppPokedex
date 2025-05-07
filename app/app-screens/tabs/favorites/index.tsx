import PokemonList from "@/src/components/PokemonList/PokemonList";
import { useFavoriteScreen } from "@/src/hooks/useFavoriteScreen";
import React from "react";
import { View, Text } from "react-native";

const FavoritesScreen = () => {

  const { pokemons, fetchMore, loadingMore, hasMore } = useFavoriteScreen();

  return (
    <View style={{ flex: 1, display: "flex", alignItems: "center", paddingVertical: 5 }}>
      {pokemons.length > 0 ? (
        <PokemonList pokemons={pokemons} hasMore={hasMore} loadingMore={loadingMore} fetchMore={fetchMore} />
      ) : (
        <Text style={{ textAlign: 'center', marginTop: 40 }}>
          Nenhum pokémon nos favoritos.
        </Text>
      )}
    </View>
  );
};

export default FavoritesScreen;
