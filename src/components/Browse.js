import React, { Component } from 'react';
import dbMovies from '../../db.js';
import NavBar from './NavBar';

export default class Browse extends Component {
	constructor(props){
		super(props)

		this.state = {
			movies: []
		}
	}

	componentWillMount(){
		let movies = JSON.parse(localStorage.getItem('movies'))
		this.setState({movies})
	}

	render(){
		return (
			<div>
				<NavBar />
				<h1>Browse Section</h1>
				{ this.state.movies.map((movie, i) => {
					return (
						<div className="col-md-3 col-sm-6 review thumbnail" key={i}>
							<h4>{ movie.title }</h4>
							<div>Cast: { movie.actors }</div>
							<div>Genre: { movie.genre }</div>
							<div>Released: { movie.year }</div>
							<div>Rating: { movie.rating }/10</div>
						</div>
					)
				})
			}
			</div>
		)
	}
}