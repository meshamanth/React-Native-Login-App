import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { Component } from "react";

import Navigation from "../login-app/src/Navigation";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
        <Navigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#455a64",
    justifyContent: "center",
    alignItems: "center",
  },
});
