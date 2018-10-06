import React, { Component } from 'react';

class UserMoviePreference extends Component{
 	render(){
      	const user = this.props.user;
      	const movie = this.props.movie;

    	return (
        	<div>{`${user.name} favorite movie is ${movie.name}`}</div>
        );
    }
}

export default UserMoviePreference;