import { View, Pressable, Text, useWindowDimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { formatPokemonName } from "@/src/utils/formatPokemonName";
import styles from "./PokemonDetailsHeader.styles";
import { IPokemonDetailsHeaderProps } from "@/src/interfaces/IPokemonDetails/IPokemonDetailsHeaderProps";
import { usePreviousAndNextPokemons } from "@/src/hooks/usePreviousAndNextPokemon";
import { useRouter } from "expo-router";
import PokemonNavigation from "../PokemonNavigation/PokemonNavigation";

const PokemonDetailsHeader = ({ pokemonName, pokemonId, isFavorite, onToggleFavorite }: IPokemonDetailsHeaderProps) => {

    const { previousAndNextPokemons } = usePreviousAndNextPokemons(pokemonId.toString());
    const router = useRouter();

    const { width } = useWindowDimensions();
    const showPokemonName = width >= 650;

    if (previousAndNextPokemons.length === 0) return;

    return (
        <>
            <View style={styles.navigationButtons}>
                <PokemonNavigation
                    pokemon={previousAndNextPokemons[0]}
                    direction="previous"
                    onPress={() => router.push(`/app-screens/pokemon-details/${previousAndNextPokemons[0].id}`)}
                    showPokemonName={showPokemonName}
                    width={width}
                />
                <PokemonNavigation
                    pokemon={previousAndNextPokemons[1]}
                    direction="next"
                    onPress={() => router.push(`/app-screens/pokemon-details/${previousAndNextPokemons[1].id}`)}
                    showPokemonName={showPokemonName}
                    width={width}
                />
            </View>
            <View style={styles.pokemonNameAndId}>
                <Pressable
                    onPress={onToggleFavorite}
                    style={styles.favoriteIcon}
                >
                    <Ionicons
                        size={30}
                        name={isFavorite ? "heart" : "heart-outline"}
                        color={isFavorite ? "red" : "#666"}
                    />
                </Pressable>
                <Text style={styles.pokemonName}>
                    {formatPokemonName(pokemonName)}
                </Text>
                <Text style={styles.pokemonId}>
                    N°{String(pokemonId).padStart(4, '0')}
                </Text>
            </View>
        </>
    )
}

export default PokemonDetailsHeader;