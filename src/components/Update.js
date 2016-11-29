import { browserHistory, Link } from 'react-router';
import React, { Component } from 'react';
import NavBar from './NavBar';


export default class Update extends Component {
	constructor(props){
		super(props)
	}

	addMovie(e){
		e.preventDefault();
		const movie = this.refs;
		let movies = JSON.parse(localStorage.getItem('movies')) || []	

		movies.push({ 
			title: movie.title.value,
			actors: movie.actors.value,
			genre: movie.genre.value,
			year: movie.year.value,
			rating: movie.rating.value
	  })	
	  localStorage.setItem('movies', JSON.stringify(movies));
	  browserHistory.push('/');
	}

	render(){
		return (
			<div>
				<NavBar />
					<form className="new" onSubmit={this.addMovie.bind(this)}>
					  <div className="form-group">
					    <label>Title</label>
					    <input type="text" className="form-control" ref="title" id="title" placeholder="Title" />
					  </div>
					  <div className="form-group">
					    <label>Actors</label>
					    <input type="text" className="form-control" ref="actors" id="actors" placeholder="Actors" />
					  </div>
					  <div className="form-group">
					    <label>Genre</label>
					    <input type="text" className="form-control" ref="genre" id="genre" placeholder="Genre" />
					  </div>
					  <div className="form-group">
					    <label>Year</label>
					    <input type="Number" className="form-control" ref="year" id="year" placeholder="Year" />
					  </div>
					  <div className="form-group">
					    <label>Rating</label>
					    <input type="Number" className="form-control" ref="rating" id="rating" placeholder="Rating" />
					  </div>
					  <button type="submit" id="addMovie" className="btn btn-primary addMovie">Add Movie</button>
					</form>
			</div>
		);
	}
}