import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const members = [
  {
    id: "1",
    name: "टार्जन कतलाम",
    village: "पिपरौद (लखनपुरी)",
    mobile: "9876543210",
  },
];

export default function MembersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>सदस्य सूची</Text>

      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>ग्राम: {item.village}</Text>
            <Text>मोबाइल: {item.mobile}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#F4F6F8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#0B6E4F",
  },
  card: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
