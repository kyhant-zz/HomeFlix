// Parent component to MovieItem

import React, { Component } from 'react';
import NavBar from './NavBar';
import MovieItem from './MovieItem';

export default class Browse extends Component {
	constructor(props){
		super(props)

		this.state = {
			movies: []
		}
	}

	// Check local storage for existing movies before render
	componentWillMount(){
		let movies = JSON.parse(localStorage.getItem('movies')) || [];
		this.setState({movies})
	}

	render(){
		// If movies previously saved, map to array of MovieList components to be rendered
		// else inform client no movies have been added
		const movieList = this.state.movies ? this.state.movies.map((movie, i) => {
			return <MovieItem key={i} movie={movie} removeable={false} />
		}) : 0
		return (
			<div>
				<NavBar />
				<div className="container browse">
					<h1>Browse</h1>
					{ movieList.length > 0 ? 
						<div className="row">
							{movieList}
						</div>
						:
						<div>
							<p>You havent added any movies!</p>
						</div>
					}
				</div>
			</div>
		)
	}
}