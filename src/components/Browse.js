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

	componentWillMount(){
		let movies = JSON.parse(localStorage.getItem('movies'))
		this.setState({movies})
	}

	render(){
		const movieList = this.state.movies.map((movie, i) => {
			return <MovieItem key={i} movie={movie} />
		})
		console.log('MOVIELIST', movieList)
		return (
				<div>
					<NavBar />
					<div className="container browse">
						<h1>Browse Section</h1>
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