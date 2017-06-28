/**
 * Created by baifan on 2017/6/24.
 */

import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';

import Index from './pages/Index';
import List from './pages/List';
import Main from './pages/Main';


const SimpleApp = StackNavigator({
  Main: {
    screen: Main,
    navigationOptions:{
      header:null,  //头部导航隐藏
    }
  },
  Index:{
    screen:Index
  },
  List:{screen:List}

});

export default SimpleApp;

