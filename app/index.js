import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  BackAndroid,
} from 'react-native';

import Intro from './scenes/Intro/index';
import Dashboard from './scenes/Dashboard/index';


var _navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {  
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
    _navigator.pop();
    return true;
  }
  return false;
});

export default class App extends Component {
  _renderScene(route, navigator){
    switch(route.id){
      case 'intro':
        return( <Intro navigator={navigator} /> );
        break;
      case 'settings':
        // return();
        break;
      case 'dashboard':
        return( <Dashboard navigator={navigator} /> );
        break;
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ id: 'intro'}}
        renderScene={(route, navigator) => this._renderScene(route, navigator)}
        configureScene={() => { return Navigator.SceneConfigs.FloatFromRight }}
      />
    );
  }


}