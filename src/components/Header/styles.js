import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: getStatusBarHeight(),
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#383838',
        
    },
    text: {
        color: "#F1F3F4",
        fontSize: 20,
        fontFamily: 'SourceSerif4_700Bold'
    }
});