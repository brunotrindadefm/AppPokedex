import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    navbarContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#ff8c00',
        padding: 4,
    },
    navbarSearch: {
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: '95%',
    },
    navbarInput: {
        flex: 1,
        borderRadius: 8,
        backgroundColor: '#dddddd',
        padding: 10,
        color: '#000'
    },
    searchButton: {
        backgroundColor: '#000000',
        borderRadius: 13,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5
    },
    navbarTitle: {
        fontSize: 22,
        fontFamily: 'OrbitronSemibold',
        color: '#ffffff',
        fontWeight: 'bold',
        marginBottom: 3,
        marginRight: 20
    }
})

export default styles