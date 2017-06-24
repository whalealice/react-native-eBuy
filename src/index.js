/**
 * Created by baifan on 2017/6/24.
 */

import { AppRegistry } from 'react-native';
import reactNative from './App';

if (!__DEV__) {
  global.console = {
    info: () => {},
    log: () => {},
    warn: () => {},
    error: () => {},
  };
}

// 注意，这里用引号括起来的'HelloWorldApp'必须和你init创建的项目名一致
AppRegistry.registerComponent('reactNative', () => reactNative);

