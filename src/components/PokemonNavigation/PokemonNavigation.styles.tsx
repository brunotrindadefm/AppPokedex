import { scaleFont } from "@/src/utils/scaleFont";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    navButton: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: "row",
        paddingHorizontal: 20,
        borderRadius: 8,
        backgroundColor: "#eee",
        flex: 1,
        marginHorizontal: 3,
        paddingVertical: 10
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