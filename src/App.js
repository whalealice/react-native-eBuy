/**
 * Created by baifan on 2017/6/24.
 */

import React, { Component } from 'react';

import { StackNavigator ,TabNavigator } from 'react-navigation';

import Login from './pages/Login'; //主页(登陆页面)
import Main from './pages/Main/main';
import Merchant from './pages/Merchant/merchant';
import Mine from './pages/Mine/mine';
import More from './pages/More/more';


import {mainColor} from './style/mainstyle';


const MainScreenNavigator = TabNavigator({
  '首页': { screen: Main },
  '商家': { screen: Merchant },
  '我的': { screen: Mine },
  '更多': { screen: More },
},{
  tabBarOptions: {
    activeTintColor: mainColor,// 文字和图片选中颜色
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    tabBarOptions: {
      inactiveTintColor: '#999', // 文字和图片未选中颜色
      showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
      indicatorStyle: {
        height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
      },
      style: {
        backgroundColor: '#fff', // TabBar背景色
      },
      labelStyle: {
        fontSize: 12, // 文字大小
      },
    },
    cardStack:{
      gesturesEnabled:true, //是否允许右滑返回，在iOS上默认为true，在Android上默认为false
    }
  }
});

const routerApp = StackNavigator({
  // Login: {
  //   screen: Login,
  //   navigationOptions:{
  //     header:null,  //头部导航隐藏
  //   }
  // },
  Main:{
    screen:MainScreenNavigator,
    navigationOptions:{
      header:null,  //头部导航隐藏
    }
  },

});


export default routerApp;

