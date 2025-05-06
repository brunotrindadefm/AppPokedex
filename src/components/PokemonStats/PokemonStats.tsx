import { View, Text } from "react-native";
import styles from "./PokemonStats.styles";
import { IPokemonStat } from "@/src/interfaces/IPokemonDetails/IPokemonStat";
import { IPokemonStatsProps } from "@/src/interfaces/IPokemonDetails/IPokemonStatsProps";

const PokemonStats = ({ pokemonStats }: IPokemonStatsProps) => {
    return (
        <View style={styles.pokemonStats}>
            <Text style={styles.pokemonDetailsTitle}>Stats</Text>
            {pokemonStats.map((stat) => (
                <View key={stat.stat.name} style={{ marginBottom: 4 }}>
                    <Text style={{ fontWeight: 'bold' }}>{stat.stat.name.toUpperCase()}:</Text>
                    <Text>{stat.base_stat}</Text>
                    <View style={styles.statsBarContainer}>
                        <View
                            style={[
                                styles.statsBar,
                                {
                                    width: `${stat.base_stat / 2}%`,
                                }
                            ]}>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    )
}

export default PokemonStats;