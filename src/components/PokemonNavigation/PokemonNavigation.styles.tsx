import { scaleFont } from "@/src/utils/scaleFont";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    navButton: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: "row",
        paddingHorizontal: 20,
        borderRadius: scaleFont(12),
        backgroundColor: "#f0f4ff",
        flex: 1,
        marginHorizontal: 3,
        paddingVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2
    },
    navText: {
        fontFamily: 'RobotoRegular',
        fontSize: scaleFont(16),
        color: '#7c7c7c',
    },
    navTextId: {
        fontFamily: 'RobotoBold',
        fontSize: scaleFont(16),
        flexWrap: 'wrap',
        flexShrink: 1,
        marginLeft: 7 
    },
})

export default styles;