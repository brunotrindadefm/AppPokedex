import { scaleFont } from "@/src/utils/scaleFont";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    pokemonNameAndId: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        gap: scaleFont(20)
    },
    favoriteIcon: {
        marginRight: 10,
        marginTop: 2 
    },
    pokemonName: {
        fontFamily: 'RobotoBold',
        fontSize: scaleFont(30),
        flexWrap: 'wrap',
        flexShrink: 1,
    },
    pokemonId: {
        fontFamily: 'RobotoRegular',
        fontSize: scaleFont(30),
        color: '#7c7c7c',
    },
})

export default styles;