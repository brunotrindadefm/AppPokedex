import { scaleFont } from "@/src/utils/scaleFont";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    navigationButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginBottom: 10,
        width: '100%'
    },
    navButton: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: "row",
        paddingHorizontal: 20,
        borderRadius: 8,
        backgroundColor: "#eee",
        flex: 1,
        marginHorizontal: 3,
        paddingVertical: 10
    },
    navText: {
        fontFamily: 'RobotoRegular',
        fontSize: scaleFont(16),
        color: '#7c7c7c',
    },
    navTextId: {
        fontFamily: 'RobotoBold',
        fontSize: scaleFont(16),
        flexWrap: 'wrap',
        flexShrink: 1,
    },
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