import { View, Text } from "react-native";
import styles from "./PokemonTypeDetails.styles";
import PokemonTypes from "../PokemonTypes/PokemonTypes";
import { IPokemonTypeDetailsProps } from "@/src/interfaces/IPokemonDetails/IPokemonTypeDetailsProps";

const PokemonTypeDetails = ({ uniqueWeaknesses, uniqueStrengthness, fourTimesWeaknesses, pokemonTypes }: IPokemonTypeDetailsProps) => {
    return (
        <>
            <View style={styles.typesContainer}>
                <Text style={styles.pokemonDetailsTitle}>Type</Text>
                <PokemonTypes
                    types={pokemonTypes}
                    textFontSize={16}
                    paddingTypeCard={7}
                />
            </View>
            <View style={styles.pokemonTypesDetails}>
                <View>
                    <Text style={styles.pokemonDetailsTitle}>Weaknesses:</Text>
                    {
                        uniqueWeaknesses.length > 0 ?
                            <PokemonTypes
                                types={uniqueWeaknesses}
                                textFontSize={16}
                                paddingTypeCard={7}
                                multipliers={fourTimesWeaknesses}
                            />
                            : <Text>Pokemon dont have Weaknesses</Text>
                    }
                </View>
                <View>
                    <Text style={styles.pokemonDetailsTitle}>Strengthness:</Text>
                    {
                        uniqueStrengthness.length > 0 ?
                            <PokemonTypes
                                types={uniqueStrengthness}
                                textFontSize={16}
                                paddingTypeCard={7}
                            />
                            : <Text>Pokemon dont have Strengthness</Text>
                    }
                </View>
            </View>
        </>
    )
}

export default PokemonTypeDetails;