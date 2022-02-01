import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function Header({text, btnBack}) {
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <View style={[styles.container, {
            flexDirection: 'row',
            justifyContent: 'space-evenly'
        }]}>
            { 
            btnBack?
                <TouchableOpacity onPress={handleGoBack}>
                    <Feather
                        name="arrow-left"
                        size={24}
                        color="#FFFFFF"
                    />
                </TouchableOpacity>
            :<View></View>
            }
            
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}