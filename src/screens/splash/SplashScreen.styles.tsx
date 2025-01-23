import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8BBD0',
    },
    logoImage: {
        width: 200,
        height: 200,
    },
    logoText: {
        fontSize: 33,   
        marginTop: 10,
        fontFamily: 'OrbitronSemibold',
        color: '#E3F2FD',
    },
    nameText: {
        position: 'absolute',
        bottom: 8,  
        marginTop: 10,
        fontFamily: 'RobotoSemibold',
        color: '#E3F2FD',
    }
});

export default styles;