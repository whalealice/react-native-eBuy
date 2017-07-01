/**
 * Created by baifan on 2017/6/30.
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

import {mainStyles} from './../../style/mainstyle';

const moreIcon = require('./../../images/icon_tabbar_misc.png');
const clickIcon = require('./../../images/icon_tabbar_misc_selected.png');

export default class List extends Component {
  static navigationOptions = {
    title: '更多',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor ,focused}) => (
      <Image
        source={!focused ? moreIcon : clickIcon}
        style={[mainStyles.icon]}
      />
    )
  };
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  };
  render() {
    return (
      <View style={styles.container}>
  <TextInput style={styles.inputText}
    password={true}
      />
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
  inputText:{
    borderColor:'#999',
    borderWidth:1,
    height:30,
    width:200
  }
});