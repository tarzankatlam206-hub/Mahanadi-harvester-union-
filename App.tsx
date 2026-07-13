import React from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <Text style={styles.title}>
        महानदी हार्वेस्टर मालिक कल्याण संघ
      </Text>

      <Text style={styles.subtitle}>
        जिला कांकेर, छत्तीसगढ़
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>यूज़र लॉगिन</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>एडमिन लॉगिन</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#006400",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#444",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#006400",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 15,
    width: "90%",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
