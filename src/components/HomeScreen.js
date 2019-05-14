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
		this.state.name == 0 ? this.setState({name: "Empty"}) : this.setState({name: data.name})
		this.state.location == 0 ? this.setState({location: "Empty"}) : this.setState({location: data.location});
		this.state.bio == 0 ? this.setState({bio: "Empty"}) : this.setState({bio: data.bio});
		this.setState({photo: data.avatar_url})

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