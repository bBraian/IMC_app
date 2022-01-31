import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { Results } from "../screens/Results";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }} >
            <Screen 
                name="Home"
                component={Home}
            />
            <Screen 
                name="Results"
                component={Results}
            />
        </Navigator>
    );
}           