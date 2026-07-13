import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0B6E4F",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "महानदी हार्वेस्टर" }}
      />

      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "लॉगिन" }}
      />

      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ title: "सदस्य पंजीकरण" }}
      />
    </Stack.Navigator>
  );
}
