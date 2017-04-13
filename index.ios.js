/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {

Platform,
  StyleSheet,
  Text,
  ScrollView,
  TouchableHighlight,
  Switch,
  Dimensions,
  Animated,
  Easing,
  LayoutAnimation,
  UIManager,
  AppRegistry,
  View,
  Image
} from 'react-native';

import {

} from 'react-native';

export default class AwesomeProject extends Component {

constructor(props){
    super(props);
    this.spinValue = new Animated.Value(0);
}

spin() {
  this.spinValue.setValue(0);
  Animated.timing(
    this.spinValue,
    {
      toValue: 1,
      duration: 1500,
      easing: Easing.linear
    }
  ).start();
}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Component World!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }

  fetch('https://www.flipkart.com/nexus-5-black-16-gb/p/itme37ffgcffuzcr?gclid=Cj0KEQjw5YfHBRDzjNnioYq3_swBEiQArj4pdCU4duQUhskgIwcXKfalTy8PqIs1xkZg-8h_yduqC4QaAn-a8P8HAQ&pid=MOBDQ9VXZMHXZGBP&cmpid=content_mobile_8965229628_gmc_pla&tgi=sem%2C1%2CG%2C11214002%2Cg%2Csearch%2C%2C146618361543%2C1o2%2C%2C%2Cc%2C%2C%2C%2C%2C%2C%2C&s_kwcid=AL%21739%213%21146618361543%21%21%21g%21273702275410%21&ef_id=WCimAAAAADF5NpBB%3A20170403112158%3As',
          {
              'method': 'GET',
              'headers': {
                  'Accept': 'text/plain',
              }
          }
      )
  .then((response) => response.text())
  .then((responseText) => {
      console.log(responseText);
  })
  .catch((error) => {
      console.warn(error);
  });

  render(){
  let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png'
      };
      return (
        <Image source={pic} style={{flex : 1}}/>
      );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#AAAAAA',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);