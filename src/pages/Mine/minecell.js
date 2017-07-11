/**
 * Created by baifan on 2017/7/11.
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Switch,
  TouchableOpacity,
  Platform

} from 'react-native';


export default class ViewCell extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '', //左侧导航文字
      rightTitle:'', //右侧文字
      rightNew:false //右侧图片(最新)
    };
  };
  render() {
    return (
      <TouchableOpacity onPress={()=>{alert('我点击了')}}>
        <View style={styles.viewList}>
          {/*--左边--*/}
          <View style={styles.viewLeft}>
            <Image source={this.props.leftImage} style={styles.leftImage}/>
            <Text>{this.props.title}</Text>
          </View>

          {/*--右边--*/}
          <View style={styles.viewRight}>
            {
              this.props.rightTitle ?
                <Text style={styles.rightTitle}>{this.props.rightTitle}</Text> :
                <Text style={styles.rightTitle}></Text>
            }
            {
              this.props.rightNew == true?
                <Image source={require('./../../images/me_new.png')} style={styles.rightNew}/> :
                <Image/>
            }
            <Image style={styles.rightIcon} source={require('./../../images/icon_cell_rightarrow.png')}/>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

}

const styles = StyleSheet.create({
  viewList: {
    backgroundColor: '#fff',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:10,
    paddingRight:10,
    height:(Platform.OS === 'ios') ? 40 : 36,
    borderColor:'#D8D8D8',
    borderBottomWidth:1
  },
  viewLeft:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
  },
  leftImage:{
    width:Platform.OS === 'ios' ? 26 : 20,
    height:Platform.OS === 'ios' ? 26 : 20,
    borderRadius:Platform.OS === 'ios' ? 13 : 10,
    resizeMode:'contain',
    marginRight:8
  },
  viewRight:{
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center',
  },
  rightTitle:{
    fontSize:12,
    color:'#999',
    marginRight:8,
  },
  rightIcon:{
    width:Platform.OS === 'ios' ? 8 : 8,
    height:Platform.OS === 'ios' ? 14 : 14,
    resizeMode:'contain',
  },
  rightNew:{
    width:Platform.OS === 'ios' ? 26 : 26,
    height:Platform.OS === 'ios' ? 22 : 22,
    resizeMode:'contain',
    marginRight:8
  }

});
