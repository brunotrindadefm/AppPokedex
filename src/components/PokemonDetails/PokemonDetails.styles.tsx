import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    pokemonDetailsContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: 20,
        backgroundColor: '#ffffff'
    },
    pokemonNameAndId: {
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
        gap: 10
    },
    pokemonName: {
        fontFamily: 'RobotoBold',
        fontSize: 35
    },
    pokemonId: {
        fontFamily: 'RobotoRegular',
        fontSize: 35,
        color: '#7c7c7c'
    },
    pokemonImage: {
        width: '100%',
        height: 500,
    },
    typesContainer: {
        width: '50%'
    }
});

export default styles;