import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Component } from "react";

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 100, height: 200 }}
          source={require("../images/Logo.png")}
        />
        <Text style={styles.logoText}>Welcome</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoText: {
    marginVertical: 15,
    fontSize: 18,
    color: "rgba(255, 255, 255, 0.7)",
  },
});
