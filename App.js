/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
// import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';


type Props ={}
export default class App extends Component<Props> {
  render() {
    return (
        <View style = {styles.container}>
        <Text> 矢量图标 </Text>
    );
  }
}

const styles = StyleSheet.create({
      container:{
        flex:1,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'#F5FCFF',
      },
});

