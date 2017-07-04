/**
 * Created by baifan on 2017/7/3.
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;

import {mainColor} from './../../style/mainstyle';

export default class ButtomTest extends Component {
  _onPressSearch = () => {
    const {onPressSearch} = this.props;
    onPressSearch();
  };
  render() {
    return (
      <View style={styles.navBar}>
        <Text style={{color:'#fff'}}>北京</Text>
        <TouchableOpacity  activeOpacity={0.3} onPress={this._onPressSearch}>
          <View style={styles.searchInput}>
            <Image
              style = {styles.searchIcon}
              source={require('./../../images/icon_shop_search.png')}/>
            <Text style={styles.searchText}>请输入搜索内容</Text>
          </View>
        </TouchableOpacity>
        <Image
          style = {styles.iconBtn}
          source={require('./../../images/icon_homepage_message.png')}/>
        <Image
          style = {styles.iconBtn}
          source={require('./../../images/icon_homepage_scan.png')}/>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  navBar: {
    height:64,
    backgroundColor: mainColor,
    flexDirection:'row',
    alignItems:'center',
    paddingTop:(Platform.OS === 'ios') ? 14 : 0,
    justifyContent:'space-around',
  },
  searchInput: {
    width:screenWidth*0.65,
    height:30,
    borderRadius:15,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#fff',
    paddingLeft:10
  },
  searchText:{
    fontSize:12,
    paddingLeft:8,
    color:'#999'
  },
  searchIcon:{
    width: 15,
    height: 15,
  },
  iconBtn: {
    width: 20,
    height: 20,
  }
});