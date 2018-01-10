import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Login from './src/pages/Login'
import SignUp from './src/pages/SignUp'

export default class App extends Component<{}> {
  render() {
    return (
      <Login />
    );
  }
}
