/**
 * Created by baifan on 2017/6/22.
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

export default class Index extends Component {
  _onPressButton() {
    // alert("You tapped the button!");
  };
  _onLongButton(){
    alert('_onLongButton')
  }l
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome 111to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <TouchableOpacity onPress={this._onPressButton}
                            activeOpacity={0.3}>
          <Text>Button</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
