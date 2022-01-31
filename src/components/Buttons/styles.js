import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 180,
        flexDirection: 'row',
        paddingHorizontal: 18,
        justifyContent: 'space-between',
        marginTop: 22,
    },
    box: {
        backgroundColor: '#383838',
        height: '100%',
        width: '46%',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingVertical: 15
    },
    title: {
        color: "#FFFFFF",
        fontSize: 18,
        fontFamily: 'SourceSerif4_400Regular'
    },
    value: {
        color: "#FFFFFF",
        fontSize: 48,
        fontFamily: 'SourceSerif4_400Regular'
    },
    meansure: {
        color: "#FFFFFF",
        fontSize: 18,
        fontFamily: 'SourceSerif4_400Regular'
    },
    row: {
        flexDirection: 'row',
    },
    plus: {
        backgroundColor: "#00B81C",
        height: 40,
        width: 40,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 7
    },
    minus: {
        backgroundColor: "#D20000",
        height: 40,
        width: 40,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 7
    },
    textBtn: {
        color: "#FFFFFF",
        fontFamily: 'SourceSerif4_700Bold',
        fontSize: 28
    }
});