import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";


const Search = () => {

    const { q } = useLocalSearchParams(); 

    return (
        <View>
            <Text>Search Results for: {q}</Text>
        </View>
    )
}

export default Search;