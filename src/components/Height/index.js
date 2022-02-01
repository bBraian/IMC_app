import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import Slider from '@react-native-community/slider';

export function Height({height, setHeight}) {

    function handleChangeHeight(value) {
        setHeight(value);
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>SELECIONE SUA ALTURA</Text>
            <Text style={styles.height}>{height}<Text style={styles.cm}>CM</Text></Text>
            
            <Slider
                style={{width: 230}}
                minimumValue={140}
                maximumValue={210}
                minimumTrackTintColor="#41A3E3"
                maximumTrackTintColor="#0B225B"
                onValueChange={value => handleChangeHeight(parseInt(value))}
                thumbTintColor="#41A3E3"
            />
        
        </View>
    );
}