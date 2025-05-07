import { View, Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { formatPokemonName } from "@/src/utils/formatPokemonName";
import styles from "./PokemonDetailsHeader.styles";
import { IPokemonDetailsHeaderProps } from "@/src/interfaces/IPokemonDetails/IPokemonDetailsHeaderProps";

const PokemonDetailsHeader = ({ pokemonName, pokemonId, isFavorite, onToggleFavorite }: IPokemonDetailsHeaderProps) => {
    return (
        <View style={styles.pokemonNameAndId}>
            <Pressable
                onPress={onToggleFavorite}
            >
                <Ionicons
                    size={30}
                    name={isFavorite ? "heart" : "heart-outline"}
                    color={isFavorite ? "red" : "#666"}
                    style={{ marginTop: 5 }}
                />
            </Pressable>
            <Text style={styles.pokemonName}>
                {formatPokemonName(pokemonName)}
            </Text>
            <Text style={styles.pokemonId}>
                N°{String(pokemonId).padStart(4, '0')}
            </Text>
        </View>
    )
}

export default PokemonDetailsHeader;