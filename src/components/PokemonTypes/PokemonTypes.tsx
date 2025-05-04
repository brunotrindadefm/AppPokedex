import typeColors from "@/src/constants/typeColors";
import styles from "./PokemonTypes.styles";
import { View, Text } from "react-native";
import { IPokemonTypesProps } from "@/src/interfaces/IPokemonTypesProps";

const PokemonTypes = ({ types, paddingTypeCard, textFontSize, width, justifyContent }: IPokemonTypesProps) => {
    return (
        <View style={[styles.pokemonTypes, {justifyContent: justifyContent ?? undefined}]}>
            {types.map((type) => (
                <View
                    style={[
                        styles.typeCard,
                        { backgroundColor: typeColors[type] || '#999' },
                        { padding: paddingTypeCard },
                        { width: width ?? '48%' }
                    ]}
                >
                    <Text style={[styles.typeCardText, { fontSize: textFontSize }]}>
                        {type}
                    </Text>
                </View>
            ))}
        </View>
    )
}

export default PokemonTypes;