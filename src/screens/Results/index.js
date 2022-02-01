import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

import { Header } from "../../components/Header";
import { Result } from "../../components/Result";
import { ImcTable } from "../../components/ImcTable";

export function Results({route, navigation}) {
    const { IMC } = route.params;

    return (
        
        <View style={styles.container}>
            <Header text="CALCULADORA DE IMC" btnBack={true} />
            <View style={styles.title}>
                <Text style={styles.text}>Seu resultado</Text>
            </View>

            <View style={styles.resultss}>
                <Result IMC={IMC} />
                <ImcTable />
            </View>
            
            
        </View>
    );
}