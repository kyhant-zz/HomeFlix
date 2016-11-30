import { browserHistory, Link } from 'react-router';
import React, { Component } from 'react';
import NavBar from './NavBar';

export default class Update extends Component {
	constructor(props){
		super(props)
	}


	// Grab movies array from local storage, create object with values for updated movie
	addMovie(e){
		e.preventDefault();
		const movie = this.refs;
		let movies = JSON.parse(localStorage.getItem('movies')) || [];
		let newMovie = true;
		let updatedMovie = { 
			title: movie.title.value,
			actors: movie.actors.value,
			genre: movie.genre.value,
			image: movie.image.value,
			year: movie.year.value,
			rating: movie.rating.value
	  };

		// If movies array includes title that matches the user input, update that movie
	  if(movies) {
			movies.forEach((storedMovie, i) => {
				if(storedMovie.title.toLowerCase() === movie.title.value.toLowerCase()) {
					movies[i] = updatedMovie;
					newMovie = false;
				}
			})
		}

		// Else push new movie to movies array & update local storage
		if(newMovie) {
			movies.push(updatedMovie);
		}

	  localStorage.setItem('movies', JSON.stringify(movies));
	  browserHistory.push('/');
	}

	render(){
		return (
			<div>
				<NavBar />
					<h1>Add / Update Movies</h1>
					<p>Enter a movie title with updated information to edit an existing film</p>
					<form className="new" onSubmit={this.addMovie.bind(this)}>
					  <div className="form-group">
					    <input type="text" className="form-control" ref="title" id="title" placeholder="Title" />
					  </div>
					  <div className="form-group">
					    <input type="text" className="form-control" ref="actors" id="actors" placeholder="Actors" />
					  </div>
					  <div className="form-group">
					    <input type="text" className="form-control" ref="genre" id="genre" placeholder="Genre" />
					  </div>
					  <div className="form-group">
					    <input type="text" className="form-control" ref="image" id="image" placeholder="Image URL" />
					  </div>
					  <div className="form-group">
					    <input type="Number" className="form-control" ref="year" id="year" placeholder="Year" />
					  </div>
					  <div className="form-group">
					    <input type="Number" className="form-control" ref="rating" id="rating" placeholder="Rating" />
					  </div>
					  <button type="submit" id="addMovie" className="btn btn-primary addMovie">Add Movie</button>
					</form>
			</div>
		);
	}
}