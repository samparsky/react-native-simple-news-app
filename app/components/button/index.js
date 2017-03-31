
import React from 'react';
const MK = require('react-native-material-kit');

import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const {
  MKButton,
  MKColor,
} = MK;

const ColoredRaisedButton = React.createClass({
	
  render: function(){
  	const Button = MKButton.coloredButton()
	  .withText(this.props.text)
	  .withOnPress(this.props.onpress)
	  .build();

	  return(
	  	<View>
	  		<Button />
	  	</View>
	  	);

	}

});

module.exports = ColoredRaisedButton;