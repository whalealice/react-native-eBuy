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


var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;

export default class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      userpassword:'',
      opacitynum:0.5
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image source={require('./../images/header.png')} style={styles.iconstyle}/>
        <TextInput placeholder={'请输入用户名/电话'}
                   multiline={false}
                   style={styles.inputstyle}
                   underlineColorAndroid='transparent'
                   maxLength={10}
                   clearButtonMode={'while-editing'}
                   defaultValue={this.state.username}
                   onChangeText={(username) => this.setState({username})}
                   onChange={this._onInputChange.bind(this)}
        />
        <TextInput placeholder='请输入密码'
                   secureTextEntry={true}
                   multiline={false}
                   style={styles.inputstyle}
                   underlineColorAndroid='transparent'
                   clearButtonMode={'while-editing'}
                   maxLength={10}
                   defaultValue={this.state.userpassword}
                   onChangeText={(userpassword) => this.setState({userpassword})}
                   onChange={this._onInputChange.bind(this)}
        />
        <TouchableOpacity onPress={this._onPress.bind(this)} activeOpacity={0.3}>
          <View style={styles.loginbtnstyle} opacity={this.state.opacitynum}>
            <Text style={{color:'#fff'}} >登陆</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.otherloginstyle}>
          <Text style={{color:'#4d99e5'}}>无法登陆</Text>
          <Text style={{color:'#4d99e5'}}>注册新用户</Text>
        </View>

        <View>
          <Text>其他方式登录:</Text>
        </View>
      </View>
    );
  };
  //点击登录
  _onPress(){
    // alert(this.state.userpassword)
    if(this.state.username.length > 0 && this.state.userpassword.length > 0){
      this.props.navigation.navigate('Index',{user:'crisitina'});
    }else{
      return false;
    }
    // this.props.navigation.navigate('Index',{user:'crisitina'});
  };

  //输入框内容改变
  _onInputChange (){
    if(this.state.username.length > 0 && this.state.userpassword.length > 0 ){
      this.setState({opacitynum: 1});
    }else{
      this.setState({opacitynum: 0.5});
    }

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
    textAlign:'center',
    width:screenWidth

  },
  loginbtnstyle:{
    height:38,
    backgroundColor:'#4d99e5',
    width:screenWidth*0.9,
    marginTop:20,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8
  },
  otherloginstyle:{
    flexDirection:'row',
    marginTop:16,
    width:screenWidth*0.9,
    justifyContent:'space-between',

  },
  iconother:{
    width:40,
    height:40
  }
});