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
  ScrollView,
} from 'react-native';

import MoreCell from './morecell'
import {mainStyles} from './../../style/mainstyle';

const moreIcon = require('./../../images/icon_tabbar_misc.png');
const clickIcon = require('./../../images/icon_tabbar_misc_selected.png');


export default class List extends Component {
  static navigationOptions = {
    title: '更多',
    tabBarIcon: ({ tintColor ,focused}) => (
      <Image
        source={!focused ? moreIcon : clickIcon}
        style={[mainStyles.icon]}
      />
    )
  };
  constructor(props) {
    super(props);
    this.state = {
      text: 'Useless Placeholder',

    };
  };
  render() {
    return (
      <ScrollView>
        <View style={[styles.cellWrap,{marginTop:10}]}>
          <MoreCell title="我的账户" pushDetails = {()=>this.pushDetails()}/>
        </View>
        <View style={styles.cellWrap}>
          <MoreCell title="省流量模式" isSwitch={true}/>
          <MoreCell title="消息提醒"/>
          <MoreCell title="邀请好友"/>
          <MoreCell title="清空缓存" rightText="1.99M"/>
        </View>
        <View style={styles.cellWrap}>
          <MoreCell title="意见反馈"/>
          <MoreCell title="问卷调查"/>
          <MoreCell title="支付帮助"/>
          <MoreCell title="网络诊断"/>
          <MoreCell title="关于活动"/>
          <MoreCell title="我要加入"/>
        </View>
        <View style={styles.cellWrap}>
          <MoreCell title="精品应用"/>
          <MoreCell title="问卷调查"/>
          <MoreCell title="支付帮助"/>
          <MoreCell title="网络诊断"/>
          <MoreCell title="关于活动"/>
          <MoreCell title="我要加入"/>
        </View>
      </ScrollView>
    );
  };
  pushDetails = ()=>{
    alert(11)
    // this.props.navigator.push({
    //   component:TwoDetails
    // })
  }
}

const styles = StyleSheet.create({
  cellWrap: {
    marginBottom:10
  },
  listIcons:{
    width:16,
    height:16,
    resizeMode:'contain'
  }
});
