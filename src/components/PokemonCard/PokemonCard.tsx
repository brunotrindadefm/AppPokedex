import { IPokemonCardProps } from "@/src/interfaces/IPokemonCardProps";
import { View, Text, Image } from "react-native";
import React from "react";

const PokemonCard = ({ pokemon }: IPokemonCardProps) => {
    return (
        <View  style={{ width: 150}}>
            <Image
                source={{uri: pokemon.sprites.other['official-artwork'].front_default || 'https://placehold.co/600x400'}}
                style={{ width: 150, height: 150 }}
                resizeMode="contain"
            />
            <Text>
                #{pokemon.id} - {pokemon.name}
            </Text>
        </View>
    )
}

export default React.memo(PokemonCard);