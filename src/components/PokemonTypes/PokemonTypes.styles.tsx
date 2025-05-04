    import { StyleSheet } from "react-native";

    const styles = StyleSheet.create({
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
        },
        typeCardText: {
            color: '#fff',
            fontWeight: 'bold',
            fontFamily: 'RobotoLight',
            textTransform: 'capitalize',
        }
    });

    export default styles;