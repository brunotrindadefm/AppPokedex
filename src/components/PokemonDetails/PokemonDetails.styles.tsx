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
        height: screenHeight * 0.6,
    },
    pokemonStats: {
        width: '85%',
        backgroundColor: '#ffffff',
        borderColor: '#cccccc',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 8,
        overflow: 'hidden',
        padding: 10
    },
    statsBarContainer: {
        width: '100%',
        height: 10,
        backgroundColor: '#D3D3D3',
        borderRadius: 3,
        marginTop: 4,
    },
    statsBar: {
        height: '100%',
        borderRadius: 3,
        backgroundColor: '#42a5f5'
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
    pokemonTypesDetails: {
        width: '85%',
        gap: 20
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
        width: '100%',
        backgroundColor: '#ffffff',
        borderColor: '#cccccc',
        borderWidth: 2,
        borderRadius: 8,
        padding: 15
    }
});

export default styles;