/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

type Props={}
export default class App extends Component<Props> {
  render() {
    return (
        <View style = {styles.container}>
        <Text > Welcome to React Native! </Text>
        </View>
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

