import React, { useState } from "react";
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
    const [height, setHeight] = useState(140);
    const [weight, setWeight] = useState(65);

    var mHeight = height/100;
    var IMC = weight / ( mHeight * mHeight );

    return (
        <View style={styles.container}>
            
            <Header text="CALCULE SEU IMC" />
            <Gender />
            <Height height={height} setHeight={setHeight}/>
            <Buttons weight={weight}  setWeight={setWeight} />
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Results', { IMC })}>
                <CalcResult/>
            </TouchableOpacity>
            

        </View>
    );
}