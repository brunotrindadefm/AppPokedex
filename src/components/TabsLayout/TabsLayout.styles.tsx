import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 16,
        left: 16,
        right: 16,
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#ff8c00",
        borderRadius: 30,
        paddingVertical: 12,
        paddingHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 6, 
        zIndex: 10,
      },
      button: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
})

export default styles;