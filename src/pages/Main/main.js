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

import SearchNav from './search';
import {mainStyles} from './../../style/mainstyle';


const homeIcon = require('./../../images/icon_tabbar_homepage.png');
const clickIcon = require('./../../images/icon_tabbar_homepage_selected.png');

export default class Main extends Component {
  static navigationOptions = {
    tabBarLabel: '首页',
    tabBarIcon: ({tintColor, focused }) => (
      <Image
        source={!focused ? homeIcon : clickIcon }
        style={[mainStyles.icon]}
      />
    )
  };
  _onPressSearch = () => {
    // alert('点击了子组件的按钮')
    this.props.navigation.navigate('商家');
  };

  render() {
    const {params} = this.props.navigation.state;
    const { navigate } = this.props.navigation;
    return (
      <View>
        <SearchNav onPressSearch={this._onPressSearch}/>
      </View>
    );
  };
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
