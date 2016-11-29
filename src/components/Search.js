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
		const resultList = this.state.results.map((movie, i) => {
			return <MovieItem key={i} movie={movie} removeable={true} />
		})

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
					  </div>
					</div>
				</form>
				{ resultList.length > 0 ? 
					<div className="row">
						{resultList}
					</div>
				:
					<div>
						<p>Enter Search Term</p>
					</div>
				}
			</div>
		);
	}
}