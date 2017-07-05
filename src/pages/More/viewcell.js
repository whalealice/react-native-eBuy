/**
 * Created by baifan on 2017/7/5.
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';


export default class ViewCell extends Component {

  constructor(props) {
    super(props);
    this.title = '';
  };
  render() {
    return (
      <TouchableOpacity onPress={()=>{alert('我点击了')}}>
        <View style={styles.viewList}>
          <Text>{this.props.title}</Text>
          <Image style={styles.listIcon} source={require('./../../images/icon_cell_rightarrow.png')}/>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  viewList: {
    backgroundColor: '#fff',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:10,
    paddingRight:10,
    height:40,
    borderColor:'#D8D8D8',
    borderBottomWidth:1
  },
  listIcon:{
    width:14,
    height:14,
    resizeMode:'contain'
  },
});
