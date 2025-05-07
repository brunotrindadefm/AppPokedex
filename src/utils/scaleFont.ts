import { Dimensions } from "react-native";

const width = Dimensions.get('window').width

export const scaleFont = (size: number) => {
    const scaleFactor = Math.min(width / 390, 1.2);
    const scaledSize = size * scaleFactor;
    return Math.max(14, Math.min(scaledSize, 32));
};