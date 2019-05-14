import React, {Component} from 'react';
import api from '../services/api';
import UserData from './UserData';

export default class HomeScreen extends React.Component{

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	username: '',
	  	name: '',
	  	location: '',
	  	bio: '',
	  	photo: 'http://saharatracking.com/1track/img/no-image.svg'

	  };

	  this.loadUsers = this.loadUsers.bind(this);
	  this.setUser = this.setUser.bind(this);
	}

	static navigationOptions = {
		title: 'GitHub Guess User'
	}

	setUser(user){
		this.setState({username: user})
		
	}

	loadUsers = async () => {
		const response = await api.get(this.state.username);
		const data = response.data;
		if(this.state.name == undefined){
			this.setState({name: "Empty"})
		} else {
			this.setState({name: data.name})
		}
		if(this.state.location == undefined){
			this.setState({location: "Empty"})
		} else {
			this.setState({location: data.location})
		}
		if(this.state.bio == undefined){
			this.setState({bio: "Empty"})
		} else {
			this.setState({bio: data.bio})
		}
		if(this.state.avatar_url == undefined){
			this.setState({photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'})
		} else {
			this.setState({photo: data.avatar_url})
		}

	};

	render(){
		return(
			<UserData 
				name={this.state.name}
				location={this.state.location}
				bio={this.state.bio}
				photo={this.state.photo}
				loadUsers={this.loadUsers}
				setUser={this.setUser}
			/>
		);
	}
}