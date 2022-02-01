import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#383838',
        height: "43%",
        marginHorizontal: 18,
        borderRadius: 12,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    alignText: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: 10,
        textAlign: 'center'
    },
    status: {
        color: "#F2E800",
        fontSize: 28,
        fontFamily: 'SourceSerif4_700Bold',
        textAlign: 'center'
    },
    text: {
        color: "#FFFFFF",
        fontSize: 20,
        fontFamily: 'SourceSerif4_400Regular',
        textAlign: 'center'
    }
})