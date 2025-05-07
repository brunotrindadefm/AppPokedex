import { View, Pressable, Text, useWindowDimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { formatPokemonName } from "@/src/utils/formatPokemonName";
import styles from "./PokemonDetailsHeader.styles";
import { IPokemonDetailsHeaderProps } from "@/src/interfaces/IPokemonDetails/IPokemonDetailsHeaderProps";
import { usePreviousAndNextPokemons } from "@/src/hooks/usePreviousAndNextPokemon";
import { useRouter } from "expo-router";
import { scaleFont } from "@/src/utils/scaleFont";

const PokemonDetailsHeader = ({ pokemonName, pokemonId, isFavorite, onToggleFavorite }: IPokemonDetailsHeaderProps) => {

    const { previousAndNextPokemons } = usePreviousAndNextPokemons(pokemonId.toString());
    const router = useRouter();

    const { width } = useWindowDimensions();
    const showPokemonName = width >= 650;

    return (
        <>
            <View style={styles.navigationButtons}>
                <Pressable
                    style={styles.navButton}
                    onPress={() => {
                        if (previousAndNextPokemons[0])
                            router.push(`/app-screens/pokemon-details/${previousAndNextPokemons[0].id}`);
                    }}
                >
                    <Ionicons
                        name="arrow-back"
                        size={scaleFont(width >= 650 ? 40 : 20)}
                        color="#000"
                    />
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        <Text style={[styles.navTextId, { fontSize: scaleFont(width >= 650 ? 16 : 13), marginRight: 7 }]}>N°{String(previousAndNextPokemons[0]?.id).padStart(4, '0')}</Text>
                        {showPokemonName && <Text style={styles.navText}>{formatPokemonName(previousAndNextPokemons[0]?.name)}</Text>}
                    </View>
                </Pressable>
                <Pressable
                    style={styles.navButton}
                    onPress={() => {
                        if (previousAndNextPokemons[1])
                            router.push(`/app-screens/pokemon-details/${previousAndNextPokemons[1].id}`);
                    }}
                >
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        {showPokemonName && <Text style={styles.navText}>{formatPokemonName(previousAndNextPokemons[1]?.name)}</Text>}
                        <Text style={[styles.navTextId, { fontSize: scaleFont(width >= 650 ? 16 : 13), marginLeft: 7 }]}>N°{String(previousAndNextPokemons[1]?.id).padStart(4, '0')}</Text>
                    </View>
                    <Ionicons
                        name="arrow-forward"
                        size={scaleFont(width >= 650 ? 40 : 20)}
                        color="#000"
                    />
                </Pressable>
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