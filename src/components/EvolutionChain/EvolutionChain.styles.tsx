import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        gap: 5
    },
    imagePressable: {
        backgroundColor: '#dddddd',
        padding: 20,
        borderRadius: '50%',
        marginTop: 20
    },
    pokemonImage: {
        width: 150,
        height: 150,
    },
    pokemonNameAndId: {
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
        gap: 5,
    },
    pokemonName: {
        fontFamily: 'RobotoBold',
        fontSize: 15
    },
    pokemonId: {
        fontFamily: 'RobotoRegular',
        fontSize: 15,
        color: '#7c7c7c'
    },
})

export default styles;