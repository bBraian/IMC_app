import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 180,
        flexDirection: 'row',
        paddingHorizontal: 18,
        justifyContent: 'space-between',
        marginTop: 18
    },
    men: {
        backgroundColor: '#383838',
        height: '100%',
        width: '46%',
        borderRadius: 12
    },
    woman: {
        backgroundColor: '#383838',
        height: '100%',
        width: '46%',
        borderRadius: 12
    },
    center: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: -10
    },
    text: {
        marginTop: 4,
        color: "#FFFFFF",
        fontSize: 18,
        fontFamily: 'SourceSerif4_400Regular'
    }
});