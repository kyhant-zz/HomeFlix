import React, { Component } from 'react';
import NavBar from './NavBar';

export default class Search extends Component {
	constructor(props){
		super(props)

		this.state = {term: ''}
	}

	onInputChange(term){
		this.setState({term: term})
	}

	render(){
		return ( 
			<div>
				<NavBar />
				<form>
					<div className="form-group row">
					  <label className="col-xs-2 col-form-label">Search</label>
					  <div className="col-xs-10">
					    <input className="form-control" 
					    			 placeholder="Search" 
					    			 id="search"
					    			 onChange={event => this.onInputChange(event.target.value)} />
					  </div>
					</div>
				</form>
			</div>
		);
	}
}