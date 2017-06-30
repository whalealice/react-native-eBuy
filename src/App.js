/**
 * Created by baifan on 2017/6/24.
 */

import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';

import Main from './pages/Main'; //主页(登陆页面)
import Home from './pages/Home';
import List from './pages/List';



const SimpleApp = StackNavigator({
  Main: {
    screen: Main,
    navigationOptions:{
      header:null,  //头部导航隐藏
    }
  },
  Home:{
    screen:Home,
    navigationOptions:{
      header:null,  //头部导航隐藏
    }
  },
  List:{screen:List}

});

export default SimpleApp;

