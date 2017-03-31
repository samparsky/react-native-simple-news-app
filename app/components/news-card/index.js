import React from 'react';
import { getTheme } from 'react-native-material-kit';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';

const theme = getTheme();

const NewsCard = React.createClass({
	render(){
		var base64Icon = 'http://www.getmdl.io/assets/demos/welcome_card.jpg';
		return (
			<View style={theme.cardStyle}>
			  <Image source={{uri : base64Icon}} style={theme.cardImageStyle} />
			  <Text style={[theme.cardTitleStyle, styles.cardTitle]}>Dropbox reportedly secures a $600 million credit line</Text>
			  <Text style={theme.cardContentStyle}>
			    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			    Mauris sagittis pellentesque lacus eleifend lacinia...
			  </Text>
			</View>
		);
	}
});


const styles = StyleSheet.create({
	cardTitle : {
		justifyContent: 'center',
		fontSize: 14
	}
});

module.exports = NewsCard;


