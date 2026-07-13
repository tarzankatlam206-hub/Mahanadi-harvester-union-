import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function DashboardScreen() {
  const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>डैशबोर्ड</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Members")}
      >
        <Text style={styles.cardText}>👥 सदस्य सूची</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Notice")}
      >
        <Text style={styles.cardText}>📢 नोटिस बोर्ड</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Fees")}
      >
        <Text style={styles.cardText}>💰 सदस्यता शुल्क</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.cardText}>👤 मेरी प्रोफ़ाइल</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Contact")}
      >
        <Text style={styles.cardText}>☎️ संपर्क करें</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0B6E4F",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#0B6E4F",
    padding: 18,
    borderRadius: 10,
    marginBottom: 15,
  },
  cardText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
