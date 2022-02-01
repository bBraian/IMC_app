import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native"; 
import { styles } from "./styles";

export function Buttons({ weight, setWeight }) {
    const [age, setAge] = useState(18)

    function handleAddValue() {
        if(weight < 200) {
            setWeight(weight+1);
        }
    }
    function handleMinusValue() {
        if(weight > 20) {
            setWeight(weight-1);
        }
    }

    function handleAddAge() {
        if(age < 100) {
            setAge(age+1);
        }
        
    }
    function handleMinusAge() {
        if(age > 1) {
            setAge(age-1);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.box}>

                <Text style={styles.title}>PESO</Text>
                <Text style={styles.value}>{weight}<Text style={styles.meansure}>KG</Text></Text>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.plus} onPress={() => handleAddValue()} TouchableOpacity={0.7}>
                        <Text style={styles.textBtn}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.minus} onPress={() => handleMinusValue()} TouchableOpacity={0.7} >
                        <Text style={styles.textBtn}>-</Text>
                    </TouchableOpacity>
                </View>
                
            </View>

            <View style={styles.box}>

                <Text style={styles.title}>IDADE</Text>
                <Text style={styles.value}>{age}</Text>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.plus} onPress={() => handleAddAge()} TouchableOpacity={0.7}>
                        <Text style={styles.textBtn}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.minus} onPress={() => handleMinusAge()} TouchableOpacity={0.7} >
                        <Text style={styles.textBtn}>-</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
    );
}