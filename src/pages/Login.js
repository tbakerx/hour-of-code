import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  StatusBar,
  View,
  TouchableOpacity
} from 'react-native';

import LoginForm from '../components/LoginForm.js';
import Logo from '../components/Logo.js';

import {Actions} from 'react-native-router-flux';

export default class Login extends Component<{}> {

  signUp(){
    Actions.signup()
  }

  render() {
    return (
      <View style={styles.container}>
            <Logo/>
            <LoginForm type="Login"/>
            <View style={styles.signUpTextContainer}>
              <Text style={styles.signUpText}>Don't have an account? </Text>
              <TouchableOpacity onPress={this.signUp}><Text style={styles.signUpButton}>Sign Up</Text></TouchableOpacity>
            </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#eeeac1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  signUpTextContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  signUpText: {
    color: '#4b4b4b',
    fontSize: 16,
    fontWeight: '100'
  },
  signUpButton: {
    color: '#45b542',
    fontSize:16,
    fontWeight: '500'
  }

});

{/*
  <color name="primaryColor">#1b5e20</color>
<color name="primaryLightColor">#4c8c4a</color>
<color name="primaryDarkColor">#003300</color>
<color name="secondaryColor">#ffd54f</color>
<color name="secondaryLightColor">#ffff81</color>
<color name="secondaryDarkColor">#c8a415</color>
<color name="primaryTextColor">#ffffff</color>
<color name="secondaryTextColor">#000000</color>
  */}
