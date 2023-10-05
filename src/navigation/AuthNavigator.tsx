import { View, Text } from "react-native";
import React from "react";
import WelcomeScreen from "../screens/authScreens/WelcomScreen";
import LoginScreen from "../screens/authScreens/LoginScreen";
import RegisterScreen from "../screens/authScreens/RegisterScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootClientTabs from "./ClientTab";
import DrawerNavigator from "./DrawerNavigator";


const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      
    </Stack.Navigator>
  );
};

export default AuthNavigator;
