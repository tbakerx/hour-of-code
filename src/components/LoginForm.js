import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
  View
} from 'react-native';


function onButtonPress(){
  return;
}

export default class LoginForm extends Component<{}> {



  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}
                    autoCapitalize="none"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    autoCorrect={false}
                    selectionColor='#fff'
                    keyboardType='email-address'
                    returnKeyType='next'
                    placeholder='Enter your email'
                    placeholderTextColor='rgba(225,225,225,0.9)'
                    underlineColorAndroid='rgba(0,0,0,0)'/>
        <TextInput style={styles.input}
                    reurnKeyType='go'
                    ref={(input) => this.passwordInput = input}
                    placeholder='Enter your Password'
                    placeholderTextColor='rgba(225,225,225,0.9)'
                    selectionColor='#fff'
                    secureTextEntry
                    underlineColorAndroid='rgba(0,0,0,0)'/>
        <TouchableOpacity style={styles.buttonContainer}
                            onPress={onButtonPress}>
              <Text style={styles.buttonText}>{this.props.type} Now</Text>
        </TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flexGrow:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: 300,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize:16,
    color: '#fff',
    marginVertical:10

  },
  buttonContainer:{
    backgroundColor: '#45b542',
    width: 300,
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12
  },
  buttonText:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
    fontSize:16,
    textAlign: 'center'
  }

});
