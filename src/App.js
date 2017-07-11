/**
 * Created by baifan on 2017/6/24.
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import { StackNavigator ,TabNavigator ,NavigationActions } from 'react-navigation';

import Login from './pages/Login'; //主页(登陆页面)
import Main from './pages/Main/main';
import Merchant from './pages/Merchant/merchant';
import Mine from './pages/Mine/mine';
import More from './pages/More/more';



import {mainColor,mainStyles} from './style/mainstyle';


const addressIcon = require('./images/icon_shop_local.png');
const searchIcon = require('./images/icon_homepage_search.png');
const setIcon = require('./images/icon_homepage_scan.png');

const MainScreenNavigator = TabNavigator({
  '首页': {
    screen: Main,
    navigationOptions:{
      header:null,  //头部导航隐藏
    }
  },
  '商家': {
    screen: Merchant,
    navigationOptions: ({navigation}) => StackOptions(navigation,addressIcon,searchIcon)
  },
  '我的': {
    screen: Mine,
    navigationOptions:{
      header:null,  //头部导航隐藏
    }
  },
  '更多': {
    screen: More,
    navigationOptions: ({navigation}) => StackOptions(navigation,'',setIcon)
  },
},{
  initialRouteName: '我的', // 默认显示界面
  tabBarPosition:'bottom', // 设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom')
  swipeEnabled: true, // 是否可以左右滑动切换tab
  tabBarOptions: {
    activeTintColor: mainColor,// 文字和图片选中颜色
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
    mode: 'card', // card: 普通app常用的左右切换  modal: 上下切换
    cardStack:{
      gesturesEnabled:true, //是否允许右滑返回，在iOS上默认为true，在Android上默认为false
    }
  }
});

//商家页面的导航
const StackOptions = (navigation,headerLeftIcon,headerRightIcon) => {
  let {state,goBack} = navigation;
  //设置导航条的样式。背景色，宽高等。如果想去掉安卓导航条底部阴影可以添加elevation: 0，iOS下用shadowOpacity: 0。
  const headerStyle = {
    backgroundColor:mainColor,
    elevation: 0
  };
  //设置导航条文字样式。安卓上如果要设置文字居中，只要添加alignSelf:'center'就可以了
  const headerTitleStyle = {
    fontSize:18,
    color:'#fff',
    fontWeight:'500',
    alignSelf:'center'
  };
  //设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题。可以自定义，也可以设置为null
  const headerBackTitle = false;
  const headerLeft = (
    <Image style={[mainStyles.icon,{marginLeft:10}]}  source = {headerLeftIcon?headerLeftIcon:null}/>
  );
  const headerRight = (
    <Image style={[mainStyles.icon,{marginRight:10}]} source = {headerRightIcon}/>
  )

  return { headerStyle , headerTitleStyle,headerBackTitle,headerLeft,headerRight}
}



const routerApp = StackNavigator({
  // Login: {
  //   screen: Login,
  //   navigationOptions:{
  //     header:null,  //头部导航隐藏
  //   }
  // },
  Home:{
    screen:MainScreenNavigator
  },
});


export default routerApp;

