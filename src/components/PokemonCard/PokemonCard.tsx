import { IPokemonCardProps } from "@/src/interfaces/IPokemonCardProps";
import { Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./PokemonCard.styles";

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
            <Text>
                grama
            </Text>
        </TouchableOpacity>
    )
}

export default React.memo(PokemonCard);