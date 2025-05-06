import React from "react";
import PokemonList from "@/src/components/PokemonList/PokemonList";
import { usePokemonList } from "@/src/hooks/usePokemonList";

const HomeScreen = () => {

  const { pokemons, fetchMore, loadingMore, hasMore } = usePokemonList();

  return (
    <PokemonList pokemons={pokemons} hasMore={hasMore} fetchMore={fetchMore} loadingMore={loadingMore}/>
  );
};

export default HomeScreen