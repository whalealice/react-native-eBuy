/**
 * Created by baifan on 2017/6/22.
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

import {mainStyles} from './../../style/mainstyle';

const homeIcon = require('./../../images/icon_tabbar_homepage.png');
const clickIcon = require('./../../images/icon_tabbar_homepage_selected.png');

export default class Main extends Component {
  static navigationOptions = {
    tabBarLabel: '首页',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({tintColor, focused }) => (
      <Image
        source={!focused ? homeIcon : clickIcon }
        style={[mainStyles.icon]}
      />
    )
  };
  _onPressButton() {
    // alert("You tapped the button!");
  };
  _onLongButton(){
    alert('_onLongButton')
  };

  render() {
    const {params} = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome 111to React Native!
        </Text>
        <Text style={styles.instructions}>
          chat with
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
  }
});
