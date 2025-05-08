import { Ionicons } from "@expo/vector-icons";
import { Pressable, View, Text } from "react-native";
import styles from "./PokemonNavigation.styles";
import { IPokemonNavigationProps } from "@/src/interfaces/IPokemonDetails/IPokemonNavigationProps";
import { formatPokemonName } from "@/src/utils/formatPokemonName";
import { scaleFont } from "@/src/utils/scaleFont";

const PokemonNavigation = ({ pokemon, onPress, width, showPokemonName, direction }: IPokemonNavigationProps) => {

    if (pokemon === null) return;

    return (
        <Pressable
            style={({ pressed }) => [
                styles.navButton,
                pressed && { backgroundColor: "#dce3f4" },
                direction === 'previous' ? {borderBottomEndRadius: 40} : {borderBottomStartRadius: 40}
            ]}
            onPress={onPress}
        >
            {direction === 'previous' && (
                <Ionicons
                    name="arrow-back"
                    size={scaleFont(width >= 650 ? 40 : 20)}
                    color="#000"
                />
            )}

            <View style={{ flexDirection: 'row', gap: 10 }}>
                {direction === 'previous' && (
                    <>
                        <Text style={[styles.navTextId, { fontSize: scaleFont(width >= 650 ? 16 : 13) }]}>
                            N°{String(pokemon.id).padStart(4, '0')}
                        </Text>
                        {showPokemonName && <Text style={styles.navText}>{formatPokemonName(pokemon.name)}</Text>}
                    </>
                )}

                {direction === 'next' && (
                    <>
                        {showPokemonName && <Text style={styles.navText}>{formatPokemonName(pokemon.name)}</Text>}
                        <Text style={[styles.navTextId, { fontSize: scaleFont(width >= 650 ? 16 : 13) }]}>
                            N°{String(pokemon.id).padStart(4, '0')}
                        </Text>
                    </>
                )}
            </View>

            {direction === 'next' && (
                <Ionicons
                    name="arrow-forward"
                    size={scaleFont(width >= 650 ? 40 : 20)}
                    color="#000"
                />
            )}
        </Pressable>
    )
}

export default PokemonNavigation