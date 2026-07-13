import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        महानदी हार्वेस्टर मालिक कल्याण संघ
      </Text>

      <Text style={styles.subtitle}>
        जिला कांकेर, छत्तीसगढ़
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>👥 कुल सदस्य</Text>
        <Text style={styles.cardValue}>0</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>📢 नोटिस</Text>
        <Text style={styles.cardValue}>कोई नया नोटिस नहीं</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>💰 सदस्यता शुल्क</Text>
        <Text style={styles.cardValue}>₹0</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🚜 पंजीकृत हार्वेस्टर</Text>
        <Text style={styles.cardValue}>0</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0B6E4F",
    marginTop: 20,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 20,
    color: "#555",
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardValue: {
    fontSize: 22,
    color: "#0B6E4F",
    fontWeight: "bold",
  },
});
