import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import DashboardScreen from "../screens/DashboardScreen";
import MembersScreen from "../screens/MembersScreen";
import NoticeScreen from "../screens/NoticeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import FeesScreen from "../screens/FeesScreen";
import ContactScreen from "../screens/ContactScreen";

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
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: "होम" }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: "लॉगिन" }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ title: "सदस्य पंजीकरण" }} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ title: "डैशबोर्ड" }} />
      <Stack.Screen name="Members" component={MembersScreen} options={{ title: "सदस्य सूची" }} />
      <Stack.Screen name="Notice" component={NoticeScreen} options={{ title: "नोटिस बोर्ड" }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: "प्रोफ़ाइल" }} />
      <Stack.Screen name="Fees" component={FeesScreen} options={{ title: "सदस्यता शुल्क" }} />
      <Stack.Screen name="Contact" component={ContactScreen} options={{ title: "संपर्क" }} />
    </Stack.Navigator>
  );
}
