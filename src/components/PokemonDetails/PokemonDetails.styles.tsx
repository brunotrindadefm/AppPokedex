import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    pokemonDetailsContainer: {
        flexGrow: 1, 
        paddingTop: 20,
        paddingBottom: 40,
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
    },
    pokemonImage: {
        width: '100%',
        height: screenHeight * 0.6,
    },
    description: {
        width: '85%',
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 8,
        borderColor: '#cccccc',
        backgroundColor: '#ffffff',
        borderWidth: 2,
        padding: 10,
        color: '#212121'
    },
    typesContainer: {
        width: '85%',
        gap: 8,
        marginBottom: 20
    },
    pokemonDetailsTitle: {
        fontFamily: 'RobotoBold',
        fontSize: 20,
        marginBottom: 10
    },
    evolutionChainContainter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '85%',
        backgroundColor: '#ffffff',
        borderColor: '#cccccc',
        borderWidth: 2,
        borderRadius: 8,
        padding: 15,
        paddingBottom: 22,
        marginTop: 25
    }
});

export default styles;