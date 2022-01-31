import React, { useState } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';

export function Gender() {
    const [genderSelected, setGenderSelected] = useState("");

    function handleSelectGender(gender) {
        setGenderSelected(gender);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={[styles.men, { backgroundColor: genderSelected === "M" ? "#41A3E3" : "#383838" }]}
                onPress={() => handleSelectGender("M")}
                activeOpacity={0.7}
            >
                <View style={styles.center}>
                    <Ionicons name="male" size={82} color="white" />
                    <Text style={styles.text}>HOMEM</Text>
                </View>
            </TouchableOpacity>    

            <TouchableOpacity 
                style={[styles.woman, { backgroundColor: genderSelected === "F" ? "#EA4683" : "#383838" }]}
                onPress={() => handleSelectGender("F")}
                activeOpacity={0.7}
            >
                <View style={styles.center}>
                    <Ionicons name="female" size={82} color="white" />
                    <Text style={styles.text}>MULHER</Text>
                </View>

            </TouchableOpacity>    
        </View>
        
    );
}