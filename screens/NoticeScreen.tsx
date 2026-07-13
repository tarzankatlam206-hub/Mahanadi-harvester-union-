import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const notices = [
  {
    id: "1",
    title: "जिला स्तरीय बैठक",
    date: "15 जुलाई 2026",
  },
  {
    id: "2",
    title: "सदस्यता शुल्क जमा करें",
    date: "20 जुलाई 2026",
  },
];

export default function NoticeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>📢 नोटिस बोर्ड</Text>

      <FlatList
        data={notices}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 15,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0B6E4F",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  date: {
    color: "#666",
    marginTop: 5,
  },
});
