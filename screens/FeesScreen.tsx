import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const fees = [
  {
    id: "1",
    member: "टार्जन कतलाम",
    amount: "₹500",
    status: "जमा",
  },
];

export default function FeesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>सदस्यता शुल्क</Text>

      <FlatList
        data={fees}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.member}</Text>
            <Text>शुल्क: {item.amount}</Text>
            <Text>स्थिति: {item.status}</Text>
          </View>
        )}
      />
    </View>
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
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
