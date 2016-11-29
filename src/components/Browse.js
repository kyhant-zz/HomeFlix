import React, { Component } from 'react';
import dbMovies from '../../db.js';

export default class Browse extends Component {
	constructor(props){
		super(props)

		this.state = {
			movies: dbMovies
		}
	}

	render(){
		return (
			<div>
				<h1>Browse Section</h1>
				{ this.state.movies.map((movie, i) => {
					return (
						<div className="thumbnail" key={i}>
							<h4>{ movie.title }</h4>
							<div>{ movie.actors }</div>
							<div>{ movie.genre }</div>
							<div>{ movie.year }</div>
							<div>{ movie.rating }</div>
						</div>
					)
				})
			}
			</div>
		)
	}
}