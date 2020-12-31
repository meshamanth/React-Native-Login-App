import React, { Component } from "react";
import { Router, Stack, Scene } from "react-native-router-flux";
import Constants from "expo-constants";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

export default class Navigation extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene
            key="login"
            component={LoginPage}
            title="Login"
            inital={true}
          />
          <Scene key="register" component={SignupPage} title="Register" />
        </Stack>
      </Router>
    );
  }
}
