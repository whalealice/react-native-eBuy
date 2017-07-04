/**
 * Created by baifan on 2017/7/4.
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ButtomTest extends Component {
  onPressHandler = () => {
    const {click} = this.props;
    click();
  };
  render() {
    //const { navigate } = this.props.navigation;
    return (
      <View>
      <Text style={styles.welcome} onPress={this.onPressHandler}>
    一个子组件,点击想要跳转!
    </Text>

    </View>
  );
  }
}

const styles = StyleSheet.create({
  welcome: {
    backgroundColor: 'blue',
    color:'#fff',
    fontSize:20
  }
});
/**
 * Created by baifan on 2017/7/4.
 */
