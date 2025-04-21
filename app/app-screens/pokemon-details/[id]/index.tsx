import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text } from "react-native";

const PokemonDetailsScreen = () => {

    const { id } = useLocalSearchParams();

    return (
        <Text>
            Pokemon com o id {id}
        </Text>
    )
}

export default PokemonDetailsScreen;