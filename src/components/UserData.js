import React from 'react';
import {View, TextInput, StyleSheet, Text, Button, Image} from 'react-native';

export default props => (	
	<View>
		<TextInput 
			onChangeText={(text) => props.setUser(text)}
			style={styles.textInput}
		/>
		<Button 
			title='Guess'
			onPress={props.loadUsers}
		/>
		<Image 
			style={{width: 200, height: 100}}
			source={{uri: props.photo }}
		/>
		<Text>{props.name}</Text>
		<Text>{props.location}</Text>
		<Text>{props.bio}</Text>

	</View>
);


const styles = StyleSheet.create({
	textInput: {
		height: 40, 
		borderColor: 'gray', 
		borderWidth: 1
	}
})