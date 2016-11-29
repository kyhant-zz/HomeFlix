import React, { Component } from 'react';
import NavBar from './NavBar';

export default class Search extends Component {
	constructor(props){
		super(props)

		this.state = {
			term: '',
			movies: [],
			results: []
		}
	}

	componentWillMount() {
		let movies = JSON.parse(localStorage.getItem('movies'))
		this.setState({movies});
	}

	onInputChange(term){
		this.setState({term})
	}

	search(e){
		e.preventDefault();
		let results = this.state.movies.filter(movie => {
				let valuesToSearch = Object.values(movie).join().toLowerCase();
				return valuesToSearch.indexOf(this.state.term.toLowerCase()) !== -1;	
		})
		this.setState({results})
	}

	render(){
		return ( 
			<div>
				<NavBar />
				<form>
					<div className="form-group row">
					  <label className="col-xs-2 col-form-label">Search</label>
					  <div className="col-md-6">
					    <input className="form-control" 
					    			 placeholder="Search" 
					    			 id="search"
					    			 onChange={event => this.onInputChange(event.target.value)} />
					    <input type="submit" onClick={this.search.bind(this)} className="btn btn-primary" />
					    { this.state.movies ? 
							this.state.results.map((movie, i) => {
								return (
									<div className="col-md-3 col-sm-6 thumbnail" key={i}>
										<h4>{ movie.title }</h4>
										<div>Cast: { movie.actors }</div>
										<div>Genre: { movie.genre }</div>
										<div>Released: { movie.year }</div>
										<div>Rating: { movie.rating }/10</div>
									</div>
										)}) :
									<div>
										<p>Enter Search Term</p>
									</div>
							}
					  </div>
					</div>
				</form>
			</div>
		);
	}
}