/**
 * Created by baifan on 2017/6/27.
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

export default class Main extends React.Component {
  _loginPress(){
    // navigate('Index', { user: 'Lucy' })
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image source={require('./../images/header.png')} style={styles.iconstyle}></Image>
        <TextInput placeholder={'请输入内容'} style={styles.inputstyle}></TextInput>
        <TextInput placeholder={'请输入密码'} password={true} style={styles.inputstyle}></TextInput>
        <View style={styles.loginbtnstyle}>
          <Text style={{color:'#fff'}} onPress={this._loginPress}>登陆</Text>
        </View>
        <View style={styles.otherloginstyle}>
          <Text>无法登陆</Text>
          <Text>新用户</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  iconstyle: {
    width:100,
    height:100,
    borderRadius:50,
    borderWidth:2,
    borderColor:'#fff',
    marginTop:100,
    marginBottom:30

  },
  inputstyle: {
    height:40,
    backgroundColor:'#fff',
    marginBottom:1,
    textAlign:'center'
  },
  loginbtnstyle:{
    height:38,
    backgroundColor:'#4d99e5',
    width:350,
    marginTop:20,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8
  },
  otherloginstyle:{
    flexDirection:'row',
    marginTop:16,
    width:350,
    justifyContent:'space-between',

  }
});