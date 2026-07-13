import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function RegisterScreen({ navigation }: any) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    alert("रजिस्ट्रेशन सफल हुआ");
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        महानदी हार्वेस्टर मालिक कल्याण संघ
      </Text>

      <TextInput
        style={styles.input}
        placeholder="नाम"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="मोबाइल नंबर"
        keyboardType="phone-pad"
        value={mobile}
        onChangeText={setMobile}
      />

      <TextInput
        style={styles.input}
        placeholder="पासवर्ड"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="रजिस्टर करें" onPress={register} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});
