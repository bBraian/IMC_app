import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export function ImcTable() {
    return (
        <View style={styles.container}>
            <View style={styles.alignText}>
                <Text style={styles.status}>Tabela IMC</Text>
                <Text style={styles.text}>Menor que 18,5              Baixo</Text>
                <Text style={styles.text}>Entre 18,5 a 24,9           Bom</Text>
                <Text style={styles.text}>Maior que 24                 Alto</Text>
            </View>
        </View>
    );
}