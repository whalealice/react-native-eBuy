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

import ViewCell from './viewcell'
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
      <ScrollView>
        <View style={[styles.container,{marginTop:10}]}>
          <ViewCell title="我的账户"/>
        </View>
        <View style={styles.container}>
          <ViewCell title="省流量模式"/>
          <ViewCell title="消息提醒"/>
          <ViewCell title="邀请好友"/>
          <ViewCell title="清空缓存"/>
        </View>
        <View style={styles.container}>
          <ViewCell title="意见反馈"/>
          <ViewCell title="问卷调查"/>
          <ViewCell title="支付帮助"/>
          <ViewCell title="网络诊断"/>
          <ViewCell title="关于活动"/>
          <ViewCell title="我要加入"/>
        </View>
        <View style={styles.container}>
          <ViewCell title="精品应用"/>
          <ViewCell title="问卷调查"/>
          <ViewCell title="支付帮助"/>
          <ViewCell title="网络诊断"/>
          <ViewCell title="关于活动"/>
          <ViewCell title="我要加入"/>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom:10
  },
  listIcons:{
    width:16,
    height:16,
    resizeMode:'contain'
  }
});
