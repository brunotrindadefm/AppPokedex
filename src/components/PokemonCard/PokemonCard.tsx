import { IPokemonCardProps } from "@/src/interfaces/IPokemonCardProps";
import { Text, Image, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./PokemonCard.styles";
import typeColors from "@/src/constants/typeColors";

const PokemonCard = ({ pokemon }: IPokemonCardProps) => {

    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.pokemonCard}>
            <Image
                source={{ uri: pokemon.sprites.other['official-artwork'].front_default || 'https://placehold.co/600x400' }}
                style={styles.cardImage}
                resizeMode="contain"
            />
            <Text style={styles.pokemonId}>
                N°{String(pokemon.id).padStart(4, '0')}
            </Text>
            <Text style={styles.pokemonName}>
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </Text>
            <View style={styles.pokemonTypes}>
                {pokemon.types.map((type) => (
                    <View
                        key={type.type.name}
                        style={[
                            styles.typeCard,
                            { backgroundColor: typeColors[type.type.name] || '#999' }
                        ]}
                    >
                        <Text style={styles.typeCardText}>
                            {type.type.name}
                        </Text>
                    </View>
                ))}
            </View>
        </TouchableOpacity >
    )
}

export default React.memo(PokemonCard);