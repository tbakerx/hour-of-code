import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native';

import Route from './src/Route';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Route />
        <StatusBar backgroundColor='#4b4b4b' barStyle='light-content' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
