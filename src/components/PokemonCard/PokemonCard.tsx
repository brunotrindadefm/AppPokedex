import { IPokemonCardProps } from "@/src/interfaces/IPokemonCardProps";
import { Text, Image, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import styles from "./PokemonCard.styles";
import { useRouter } from "expo-router";
import PokemonTypes from "../PokemonTypes/PokemonTypes";

const PokemonCard = ({ pokemon }: IPokemonCardProps) => {

    const router = useRouter();
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.pokemonCard}>
            <Pressable
                onPress={() => {
                    router.push({
                        pathname: '/app-screens/pokemon-details/[id]',
                        params: {
                            id: pokemon.id.toString(),
                        }
                    })
                }}>
                <Image
                    source={{ uri: pokemon.sprites.other['official-artwork'].front_default || 'https://placehold.co/600x400' }}
                    style={styles.cardImage}
                    resizeMode="contain"
                />
            </Pressable>
            <Text style={styles.pokemonId}>
                N°{String(pokemon.id).padStart(4, '0')}
            </Text>
            <Text style={styles.pokemonName}>
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </Text>
            <PokemonTypes
                types={pokemon.types.map(t => t.type.name)}
                textFontSize={10}
                paddingTypeCard={5}
            />
        </TouchableOpacity >
    )
}

export default React.memo(PokemonCard);