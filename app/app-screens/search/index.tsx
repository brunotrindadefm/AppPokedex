import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { View, Text } from "react-native";
import TabsLayout from "../tabs/_layout";

const Search = () => {

  const { q } = useLocalSearchParams();

  useEffect(() => {
    if (typeof q === "string") {
      console.log("Buscando por:", q);
    }
  }, [q]);

  return (
    <>
      <View style={{ flex: 1 }}>
        <Text style={{ padding: 20 }}>Resultados para: {q}</Text>
        <TabsLayout />
      </View>
    </>
  )
}

export default Search;