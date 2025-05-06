import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
})

export default styles;