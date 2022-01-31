import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>CALCULE SEU IMC</Text>
        </View>
    );
}