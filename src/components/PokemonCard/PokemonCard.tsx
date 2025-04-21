import { IPokemonCardProps } from "@/src/interfaces/IPokemonCardProps";
import { Text, Image, TouchableOpacity, View, Pressable } from "react-native";
import React from "react";
import styles from "./PokemonCard.styles";
import typeColors from "@/src/constants/typeColors";
import { useRouter } from "expo-router";

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