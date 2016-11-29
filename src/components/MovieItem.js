import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class MovieItem extends Component {
	constructor(props){
		super(props)

		this.state={selectedMovie: ''}
	}

	deleteMovie(e, title){
		e.preventDefault()
		let movies = JSON.parse(localStorage.getItem('movies')) || [];

		if(confirm('Are you sure you want to delete this video from your library?')){
			movies = movies.filter(movie => {
				return movie.title != title;
			})
		  localStorage.setItem('movies', JSON.stringify(movies));
		  browserHistory.push('/');
			} else {
			console.log('not so fast');
		}
	}

	render(){
		const title = this.props.movie.title;
		if(this.props.removeable) {
			return (
				<div className="col-md-3 thumbnail">
					<h4>{ this.props.movie.title }</h4>
					<img src={ this.props.movie.image || "https://s-media-cache-ak0.pinimg.com/736x/72/24/f6/7224f6d53614cedbf8cef516b705a555.jpg"} />
					<div>Cast: { this.props.movie.actors }</div>
					<div>Genre: { this.props.movie.genre }</div>
					<div>Released: { this.props.movie.year }</div>
					<div>Rating: { this.props.movie.rating }/10</div>
					<button className="btn btn-danger" onClick={movie => this.deleteMovie(movie, title)}>Delete</button>
				</div>
			)
		} else {
			return (
				<div className="col-md-3 thumbnail">
					<h4 ref={this.props.movie.title}>{ this.props.movie.title }</h4>
					<img src={ this.props.movie.image || "https://s-media-cache-ak0.pinimg.com/736x/72/24/f6/7224f6d53614cedbf8cef516b705a555.jpg"} />
					<div>Cast: { this.props.movie.actors }</div>
					<div>Genre: { this.props.movie.genre }</div>
					<div>Released: { this.props.movie.year }</div>
					<div>Rating: { this.props.movie.rating }/10</div>
				</div>
			)
		}
	}
}