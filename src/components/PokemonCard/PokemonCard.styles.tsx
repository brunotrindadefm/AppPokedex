import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    pokemonCard: {
        width: 150,
        padding: 5,
        cursor: 'pointer'
    },
    cardImage: {
        width: 150,
        height: 150,
        backgroundColor: '#dddddd',
        padding: 20,
        borderRadius: 8
    },
    pokemonName: {
        fontFamily: 'RobotoBold',
        fontSize: 18
    },
    pokemonId: {
        fontFamily: 'RobotoRegular',
        fontSize: 11,
        marginBottom: 7,
        marginTop: 5
    }
})

export default styles;