import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
    pokemonDetailsTitle: {
        fontFamily: 'RobotoBold',
        fontSize: 20,
        marginBottom: 10
    }
})

export default styles;