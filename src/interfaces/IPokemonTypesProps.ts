import { DimensionValue, ViewStyle } from "react-native";

export interface IPokemonTypesProps {
    types: string[];
    paddingTypeCard: number,
    textFontSize: number,
    width?: DimensionValue,
    justifyContent?: ViewStyle['justifyContent'];
}