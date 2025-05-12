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
            display: 'flex',
            color: '#fff',
            fontWeight: 'bold',
            fontFamily: 'RobotoLight',
            textTransform: 'capitalize',
        },
        starContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 16,
            width: 16,
            backgroundColor: 'black',
            borderRadius: '50%',
            marginLeft: 5
        }
    });

    export default styles;