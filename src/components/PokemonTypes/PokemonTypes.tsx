import { typeColors } from "@/src/constants/typeColors";
import styles from "./PokemonTypes.styles";
import { View, Text } from "react-native";
import { IPokemonTypesProps } from "@/src/interfaces/IPokemonTypesProps";
import { Ionicons } from "@expo/vector-icons";

const PokemonTypes = ({ types, paddingTypeCard, textFontSize, width, justifyContent, multipliers }: IPokemonTypesProps) => {

    return (
        <View style={[styles.pokemonTypes, { justifyContent: justifyContent ?? undefined }]}>
            {types.map((type) => (
                <View
                    key={type}
                    style={[
                        styles.typeCard,
                        { backgroundColor: typeColors[type] || '#999' },
                        { padding: paddingTypeCard },
                        { width: width ?? '48%' }
                    ]}
                >
                    <Text style={[styles.typeCardText, { fontSize: textFontSize }]}>
                        {type}
                        {multipliers?.includes(type) && (
                            <View style={styles.starContainer}>
                                <Ionicons name="star-sharp" color="white" />
                            </View>
                        )}
                    </Text>
                </View>
            ))}
        </View>
    )
}

export default PokemonTypes;