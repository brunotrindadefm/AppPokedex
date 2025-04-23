import typeColors from "@/src/constants/typeColors";
import styles from "./PokemonTypes.styles";
import { View, Text } from "react-native";
import { IPokemonTypesProps } from "@/src/interfaces/IPokemonTypesProps";

const PokemonTypes = ({ types, paddingTypeCard, textFontSize }: IPokemonTypesProps) => {
    return (
        <View style={styles.pokemonTypes}>
            {types.map((type) => (
                <View
                    key={type}
                    style={[
                        styles.typeCard,
                        { backgroundColor: typeColors[type] || '#999' },
                        { padding: paddingTypeCard }
                    ]}
                >
                    <Text style={[styles.typeCardText, {fontSize: textFontSize}]}>
                        {type}
                    </Text>
                </View>
            ))}
        </View>
    )
}

export default PokemonTypes;