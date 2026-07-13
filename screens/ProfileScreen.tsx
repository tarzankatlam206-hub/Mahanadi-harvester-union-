import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>मेरी प्रोफ़ाइल</Text>

      <View style={styles.card}>
        <Text style={styles.label}>नाम:</Text>
        <Text style={styles.value}>टार्जन कतलाम</Text>

        <Text style={styles.label}>मोबाइल:</Text>
        <Text style={styles.value}>XXXXXXXXXX</Text>

        <Text style={styles.label}>ग्राम:</Text>
        <Text style={styles.value}>पिपरौद (लखनपुरी)</Text>

        <Text style={styles.label}>जिला:</Text>
        <Text style={styles.value}>कांकेर, छत्तीसगढ़</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0B6E4F",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 20,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    color: "#444",
    marginBottom: 5,
  },
});
