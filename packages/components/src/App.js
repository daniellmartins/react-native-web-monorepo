import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#9b0000" />
      <View style={styles.header} />
      <Text style={styles.welcome}>Welcome to React Native</Text>
      <Text style={styles.instructions}>
        This component is being shared between iOS, Android & Web.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 56,
    backgroundColor: "#d50000",
    elevation: 2,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 2
  },
  welcome: {
    color: "#2d2d2d",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10
  },
  instructions: {
    color: "#2d2d2d",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 5
  }
});
