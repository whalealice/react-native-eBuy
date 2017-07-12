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
  Switch,
  TouchableOpacity,
  Platform
} from 'react-native';


export default class ViewCell extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      isSwitch:false, //右侧是否是开关
      isOn:false, //开关的状态
      rightText:''
    };
  };
  render() {
    return (
      <TouchableOpacity onPress={()=>this.passMenthod()}>
        <View style={styles.viewList}>
          <Text>{this.props.title}</Text>
          {/*--右边--*/}
          {
            this.props.isSwitch ?
            <Switch value={this.state.isOn == true} onValueChange={()=>{
              this.setState({isOn:!this.state.isOn})
            }}/> :
            <View style={styles.viewTitle}>
              {this.renderRightTitle()}
              <Image style={styles.listIcon} source={require('./../../images/icon_cell_rightarrow.png')}/>
            </View>
          }
        </View>
      </TouchableOpacity>
    );
  };
  // 右边
  renderRightTitle(){
    if(this.props.rightText ){
      return(
        <Text style={styles.rightTitle}>{this.props.rightText}</Text>
      )
    }
  };

  passMenthod = () =>{
    this.props.pushDetails()
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
    height:(Platform.OS === 'ios') ? 44 : 40,
    borderColor:'#D8D8D8',
    borderBottomWidth:1
  },
  viewTitle:{
    width:60,
    flexDirection:'row',
    justifyContent:'flex-end'
  },
  listIcon:{
    width:Platform.OS === 'ios' ? 8 : 8,
    height:Platform.OS === 'ios' ? 14 : 14,
    resizeMode:'contain',
  },
  rightTitle:{
    marginRight:10,
    color:'#999',
    fontSize:12
  }

});
