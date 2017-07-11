/**
 * Created by baifan on 2017/7/1.
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Dimensions,
  View,
  Platform
} from 'react-native';

export const mainColor = "#F16118"

export const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  icon: {
    height: (Platform.OS === 'ios') ? 24 : 28,
    width: (Platform.OS === 'ios') ? 24 : 28,
    resizeMode:'contain'
  }
});


// export const {height, width, scale, fontScale} = Dimensions.get('window');