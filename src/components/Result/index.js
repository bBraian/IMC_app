import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export function Result({IMC}) {

    IMC = IMC.toFixed(1);

    var text = "";
    var status = "";

    if(IMC < 18.5) {
        status = "Abaixo do peso";
        text = "O seu IMC está abaixo do normal, você precisa comer mais";
    } else if(IMC > 18.5 && IMC < 24.9) {
        status = "Normal";
        text = "O seu IMC está normal, bom trabalho!";
    } else {
        status = "Acima do peso"
        text = "O seu IMC está muito alto, você precisa se exercitar";
    }

    return (
        <View style={styles.container}>
            <View style={styles.alignText}>
                <Text style={styles.status}>{status}</Text>
                <Text style={styles.value}>{IMC}</Text>
                <Text style={styles.text}>{text}</Text>
            </View>
        </View>
    );
}