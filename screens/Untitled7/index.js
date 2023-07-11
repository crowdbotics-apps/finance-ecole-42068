import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, ScrollView, SafeAreaView, View, Text, TextInput, TouchableOpacity, Picker } from "react-native";

const PaymentPage = () => {
  const navigation = useNavigation();
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <View style={styles.container}>
          <Text style={styles.title}>Payment Details</Text>
          <TextInput style={styles.input} placeholder="Amount" value={amount} onChangeText={setAmount} keyboardType="numeric" />
          <Picker style={styles.input} selectedValue={recipient} onValueChange={setRecipient}>
            <Picker.Item label="Select Recipient" value="" />
            <Picker.Item label="Recipient 1" value="recipient1" />
            <Picker.Item label="Recipient 2" value="recipient2" />
            <Picker.Item label="Recipient 3" value="recipient3" />
          </Picker>
          <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate("login2", {
            Destinataire: "Destinataire",
            Montant: "Montant ",
            Date: "Date"
          });
        }}>
            <Text style={styles.buttonText}>Pay Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 10,
    borderRadius: 5
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold"
  }
});
export default PaymentPage;