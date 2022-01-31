import React from "react";
import { View, TouchableOpacity} from "react-native";
import { styles } from "./styles";

import { Header } from "../../components/Header";
import { Gender } from "../../components/Gender";
import { Height } from "../../components/Height"; 
import { Buttons } from "../../components/Buttons";
import { CalcResult } from "../../components/CalcResult";
import { useNavigation } from "@react-navigation/native";


export function Home() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            
            <Header />
            <Gender />
            <Height />
            <Buttons />
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Results')}>
                <CalcResult/>
            </TouchableOpacity>
            

        </View>
    );
}