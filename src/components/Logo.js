import React, {Component} from 'react';
import{
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Logo extends Component<{}> {
  render(){
    return(
        <View style={styles.container}>
          <Image style={{width: 125, height: 125}}
                 source={require('../../src/images/logo.png')} />
          <Text style={styles.logoText}> Hour of <Text style={styles.logoTextAlt}>Code </Text></Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  logoText: {
    marginVertical: 15,
    fontSize: 42,
    fontWeight: '500',
    fontStyle: 'italic',
    color: '#4b4b4b'
  },
  logoTextAlt:{
    color: '#45b542',
    textShadowOffset: {width: 2, height: 2},
    textShadowColor: '#000',
    textShadowRadius: 7,
  }
});
