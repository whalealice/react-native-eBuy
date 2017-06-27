/**
 * Created by baifan on 2017/6/27.
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

export default class List extends Component {
  static navigationOptions = {
    title: '你好',//设置标题内容
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
