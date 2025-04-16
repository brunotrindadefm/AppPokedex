import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import { View, Text } from "react-native";

const Search = () => {

    const { q } = useLocalSearchParams();

    useEffect(() => {
        if (typeof q === "string") {
          console.log("Buscando por:", q);
        }
      }, [q]);

    return (
        <View style={{ flex: 1 }}>
            <Text style={{ padding: 20 }}>Resultados para: {q}</Text>
        </View>
    )
}

export default Search;