import { useLocalSearchParams } from "expo-router";
import PokemonSearch from "@/src/components/PokemonSearch/PokemonSearch";

const SearchScreen = () => {

  const { q } = useLocalSearchParams();

  return (
    <PokemonSearch query={q as string} />
  )
};

export default SearchScreen;