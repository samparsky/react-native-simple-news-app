import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  ListView,

} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import NewsCard from './../../components/news-card/index';

var styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
  },

  containerToolbar: {
    flex: 1,
    //justifyContent: 'center',
    justifyContent: 'flex-start',
    // https://github.com/facebook/react-native/issues/2957#event-417214498
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },

})

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}) // assumes immutable objects


var Dashboard = React.createClass({
  openDrawer: function() {
    this.refs['DRAWER_REF'].openDrawer();
  },

  getInitialState: function(){
    return {
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2']),
    };
  },
  render: function() {
    // alert('hello');
    return (

      <View style={styles.containerToolbar}>
        <Icon.ToolbarAndroid
        navIconName="md-paper"
        title="News Collection"
        style={styles.toolbar}
        onIconClicked={this.openDrawer}
        actions={[{title: 'Settings',  iconName: 'md-settings', show: 'always'}]}
        onActionSelected={this.onActionSelected} />

        <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <NewsCard />}
        />

      </View>

    )
  },

  onActionSelected: function(position) {
    if (position === 0) { // index of 'Settings'
      showSettings();
    }
  }

})

module.exports = Dashboard;
