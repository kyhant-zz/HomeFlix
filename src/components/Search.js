import React, { Component } from 'react';
import NavBar from './NavBar';
import MovieItem from './MovieItem';

export default class Search extends Component {
	constructor(props){
		super(props)

		this.state = {
			term: '',
			movies: [],
			results: []
		}
	}

	// Check local storage for existing movies before render
	componentWillMount() {
		let movies = JSON.parse(localStorage.getItem('movies'))
		this.setState({movies});
	}

	// Update state.term on each change
	onInputChange(term){
		this.setState({term})
	}

	// Create string of all values associated with each movie object
	// Check for search term in string, set state.results to the output
	search(e){
		e.preventDefault();
		let results = this.state.movies.filter(movie => {
				let valuesToSearch = Object.values(movie).join().toLowerCase();
				return valuesToSearch.indexOf(this.state.term.toLowerCase()) !== -1;	
		})
		this.setState({results})
	}

	render(){
		// If search yields results, map results array to MovieList components to be rendered
		// Else display nothing
		const resultList = this.state.results.map((movie, i) => {
			return <MovieItem key={i} movie={movie} removeable={true} />
		})

		return ( 
			<div>
				<NavBar />
				<h1>Search</h1>
				<form>
					<div className="form-group row">
					  <div className="col-md-6 form-group row">
					    <input className="form-control" 
		    			  placeholder="Search" 
		    			  id="search"
		    			  onChange={event => this.onInputChange(event.target.value)} />
					    <input type="submit" onClick={this.search.bind(this)} className="btn btn-primary" />
					  </div>
					</div>
				</form>
				{ resultList.length > 0 ? 
					<div className="row">
						{resultList}
					</div> :
					<div>
					</div>
				}
			</div>
		);
	}
}