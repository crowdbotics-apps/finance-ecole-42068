import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const MenuScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <Image source={{
      uri: "https://tinyurl.com/42evm3m3"
    }} style={styles.logo} />
      <Text style={styles.title}>Menu</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate("Option1Screen");
      }}>
          <Text style={styles.buttonText}>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate("Option2Screen");
      }}>
          <Text style={styles.buttonText}>Option 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate("Option3Screen");
      }}>
          <Text style={styles.buttonText}>Option 3</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 20,
    width: 200,
    height: 0
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: "#007AFF",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10
  },
  buttonText: {
    fontSize: 18,
    color: "#fff"
  }
});
export default MenuScreen;