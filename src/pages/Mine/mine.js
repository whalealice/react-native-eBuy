/**
 * Created by baifan on 2017/6/27.
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Platform,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';


import MineCell from './minecell'
import {mainColor,mainStyles} from './../../style/mainstyle';

const mineIcon = require('./../../images/icon_tabbar_mine.png');
const clickIcon = require('./../../images/icon_tabbar_mine_selected.png');

export default class List extends Component {
  static navigationOptions = {
    title: '我的',//设置标题内容
    tabBarIcon: ({ tintColor , focused}) => (
      <Image
        source={!focused ? mineIcon : clickIcon}
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
      <View>
        <View>
          {/* --上--*/}
          <View style={styles.mineTop}>
            <View style={styles.mineLeft}>
              <Image source={require('./../../images/header.png')} style={styles.mineIcon}/>
              <Text style={{fontSize:18,color:'#fff',fontWeight:'500'}}>crisitina</Text>
            </View>
            <Image source={require('./../../images/icon_cell_rightarrow.png')}
                   style={styles.mineArrow}
            />

          </View>
          {/* --下--*/}
        </View>

        <View style={styles.cellWrap}>
          <MineCell
            title="我的订单"
            leftImage={require('./../../images/collect.png')}
            rightTitle="查看全部订单"
          />
          <View style={styles.orderCell}>
            <View style={styles.orderItem}>
              <Image style={styles.orderImage} source={require('./../../images/order1.png')}/>
              <Text style={styles.orderTitle}>代付款</Text>
            </View>
            <View style={styles.orderItem}>
              <Image style={styles.orderImage} source={require('./../../images/order2.png')}/>
              <Text style={styles.orderTitle}>待使用</Text>
            </View>
            <View style={styles.orderItem}>
              <Image style={styles.orderImage} source={require('./../../images/order3.png')}/>
              <Text style={styles.orderTitle}>待评价</Text>
            </View>
            <View style={styles.orderItem}>
              <Image style={styles.orderImage} source={require('./../../images/order4.png')}/>
              <Text style={styles.orderTitle}>退款/售后</Text>
            </View>
          </View>
        </View>

        <View style={styles.cellWrap}>
          <MineCell
            title="我的钱包"
            leftImage={require('./../../images/draft.png')}
            rightTitle="账户余额:¥100"
          />
          <MineCell
            title="抵用券"
            leftImage={require('./../../images/like.png')}
            rightTitle="0"
          />
        </View>

        <View style={styles.cellWrap}>
          <MineCell
            title="积分商城"
            leftImage={require('./../../images/card.png')}
          />
        </View>

        <View style={styles.cellWrap}>
          <MineCell
            title="今日推荐"
            leftImage={require('./../../images/new_friend.png')}
            rightNew={true}
          />
        </View>

        <View style={styles.cellWrap}>
          <MineCell
            title="我要合作"
            leftImage={require('./../../images/pay.png')}
            rightTitle="轻松开店,招财进宝"
          />
        </View>

      </View>
  );
  }
}

const styles = StyleSheet.create({
  mineTop:{
    height:100,
    paddingTop:Platform.OS === 'ios' ? 14 : 0,
    backgroundColor:mainColor,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingLeft:10,
    paddingRight:10,
  },
  mineLeft:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  mineIcon:{
    width:Platform.OS === 'ios' ? 62 : 68,
    height:Platform.OS === 'ios' ? 62 : 68,
    borderRadius:Platform.OS === 'ios' ? 31 : 34,
    borderColor:'rgba(255, 255, 255, 0.5)',
    borderWidth:3,
    marginRight:10
  },
  mineArrow:{
    width:Platform.OS === 'ios' ? 8 : 8,
    height:Platform.OS === 'ios' ? 14 : 14,
    resizeMode:'contain',
  },



  cellWrap: {
    marginBottom:10
  },
  orderCell:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#fff',
    height:60,
    borderColor:'#D8D8D8',
    borderBottomWidth:1
  },
  orderItem:{
    flex:1,
    flexDirection:'column',
    alignItems:'center',
  },
  orderImage:{
    width:Platform.OS === 'ios' ? 36 :32,
    height:Platform.OS === 'ios' ? 36 :32,
    resizeMode:'contain',
  },
  orderTitle:{
    fontSize:12,
    color:'#999'
  }
});
