import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import Swiper from 'react-native-swiper';
import ColoredRaisedButton from './../../components/button/index';

var styles = StyleSheet.create({
  wrapper: {
  	paddingBottom : 30,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  text: {
    color: '#fff',
    fontSize: 24,
    paddingTop : 20,
    paddingBottom: 20,
    fontWeight: 'bold',
  }
})

var Intro = React.createClass({

  onPress : function(){
  	return this.props.navigator.push({id : 'dashboard'});
  },

  render: function() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false}>
        <View style={styles.slide1}>
          <Image source={require('../../images/post.png')} />
          <Text style={styles.text}>Latest New Posts</Text>
        </View>
        <View style={styles.slide2}>
          <Image source={require('../../images/people.png')} />

          <Text style={styles.text}>Be connected</Text>
        </View>
        <View style={styles.slide3}>
          <Image source={require('../../images/world.png')} />
          <Text style={styles.text}>Get Information Easily</Text>
        </View>
        <View style={styles.slide4}>
        	<Text style={styles.text}>Let's get you started</Text>
        	<ColoredRaisedButton  text="Get Started!" onpress={this.onPress} />
        </View>
      </Swiper>
    )
  }
})

module.exports = Intro;
