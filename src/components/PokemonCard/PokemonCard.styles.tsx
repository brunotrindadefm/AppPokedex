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
    },
    pokemonTypes: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5,
        marginTop: 5,
        width: '100%',
        marginLeft: 1.5
    },
    typeCard: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 3,
        width: '48%'
    },
    typeCardText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
        fontFamily: 'RobotoLight',
        textTransform: 'capitalize',
    }
})

export default styles;