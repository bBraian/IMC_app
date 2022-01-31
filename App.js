import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import { Home } from './src/screens/Home';
import { Results } from './src/screens/Results';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { SourceSerif4_700Bold, SourceSerif4_400Regular } from '@expo-google-fonts/source-serif-4';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './src/routes';

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    SourceSerif4_700Bold,
    SourceSerif4_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232323"
  }
});


