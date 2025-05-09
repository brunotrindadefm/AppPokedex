import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    navbarContainer: {
        width: "100%",
        backgroundColor: "#ff8c00",
        paddingHorizontal: 16,
        paddingVertical: 10,
        gap: 8,
    },
    navbarTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
        fontFamily: "OrbitronSemibold",
        textAlign: "center",
    },
    navbarSearch: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 6,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 4
    },
    navbarInput: {
        flex: 1,
        fontSize: 16,
        color: "#333",
        paddingVertical: 6,
        paddingHorizontal: 8,
    },
    searchButton: {
        backgroundColor: "#000",
        borderRadius: 8,
        padding: 8,
        marginLeft: 6,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default styles