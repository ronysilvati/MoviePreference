import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import movies from './Movies.js';
import users from './Users.js';
import profiles from './Profiles';
import UserMoviePreference from './UserMoviePreference.js';


/*
Use React and the data below to display a list of users alongside their favorite movies.

For detailed instructions, refer to instructions.md.
*/

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Favorite Movies</h2>
		{
        	profiles.map((profile)=>{
             
              const user = users[profile.userID];
              const movie = movies[profile.favoriteMovieID];
            
              return <UserMoviePreference user={user} movie={movie}/>
            })
        }
      </div>
    );
  }
}

export default App;
