import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

const Search = () => {

    const { q } = useLocalSearchParams();

    return (
        <View style={{ flex: 1 }}>
            <Text style={{ padding: 20 }}>Resultados para: {q}</Text>
        </View>
    )
}

export default Search;