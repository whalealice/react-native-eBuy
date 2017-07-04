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
import Search from './pages/Main/search';




import {mainColor,mainStyles} from './style/mainstyle';


const MainScreenNavigator = TabNavigator({
  '首页': {
    screen: Main,
    navigationOptions:{
      header:null,  //头部导航隐藏
    }
  },
  '商家': { screen: Merchant },
  '我的': { screen: Mine },
  '更多': { screen: More },
},{
  initialRouteName: '首页', // 默认显示界面
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

// const StackOptions = ({navigation}) => {
//   let {state,goBack} = navigation;
//   const resetAction = NavigationActions.reset({
//     index: 0,
//     actions: [
//       NavigationActions.navigate({ routeName: 'Search'})
//     ]
//   });
//   const headerStyle = {backgroundColor:mainColor};
//   const headerTitle =  null ;
//   const headerTitleStyle = {fontSize:20,color:'white',fontWeight:'500'};
//   const headerBackTitle = false;
//   const headerLeft = (
//     <TouchableOpacity onPress={()=>{navigation.navigate('DrawerOpen')}}>
//       <View style={mainStyles.button}>
//         <Text style={mainStyles.buttonText}>北京 </Text>
//       </View>
//     </TouchableOpacity>
//   );
//
//
//   return {headerStyle,headerTitle,headerTitleStyle,headerBackTitle,headerLeft}
//
// };



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

