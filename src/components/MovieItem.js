import React, { Component } from 'react';

export default class MovieItem extends Component {
	constructor(props){
		super(props)
	}

	render(){
		console.log('THIS PROPS', this.props)
		return (
		<div className="col-md-3 thumbnail">
			<h4>{ this.props.movie.title }</h4>
			<img src={ this.props.movie.image || "https://s-media-cache-ak0.pinimg.com/736x/72/24/f6/7224f6d53614cedbf8cef516b705a555.jpg"} />
			<div>Cast: { this.props.movie.actors }</div>
			<div>Genre: { this.props.movie.genre }</div>
			<div>Released: { this.props.movie.year }</div>
			<div>Rating: { this.props.movie.rating }/10</div>
		</div>
		)
	}
}