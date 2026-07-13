import React from "react";
import { View, Text, StyleSheet, Linking, TouchableOpacity } from "react-native";

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>संपर्क करें</Text>

      <View style={styles.card}>
        <Text style={styles.label}>संघ का नाम</Text>
        <Text style={styles.value}>
          महानदी हार्वेस्टर मालिक कल्याण संघ
        </Text>

        <Text style={styles.label}>जिला</Text>
        <Text style={styles.value}>कांकेर, छत्तीसगढ़</Text>

        <Text style={styles.label}>मीडिया प्रभारी</Text>
        <Text style={styles.value}>टार्जन कतलाम</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL("tel:+919876543210")}
        >
          <Text style={styles.buttonText}>📞 कॉल करें</Text>
        </TouchableOpacity>
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
    padding: 20,
    borderRadius: 12,
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
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#0B6E4F",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
