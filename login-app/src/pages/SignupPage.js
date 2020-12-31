import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Component } from "react";

import Logo from "../components/Logo";
import Form from "../components/Form";

export default class Navigation extends Component {
  render() {
    return (
      <View styles={styles.container}>
        <Logo />
        <Form type="SignupPage" />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Already have an account?</Text>
          <Text style={styles.signupButton}> Sign in</Text>
        </View>
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
  signupTextCont: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    flexDirection: "row",
  },
  signupText: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 16,
  },
  signupButton: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});
