import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import Search from './Search';

export default class NavBar extends Component {
	render(){
		return (
			<nav className="navbar navbar-default navbar-fixed-top">
		  <div className="container-fluid">
		    <div className="navbar-header">
		      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
		        <span className="sr-only">Toggle navigation</span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		      </button>
		      <a className="navbar-brand" href="/">HomeFlix</a>
		    </div>

		    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		      <ul className="nav navbar-nav navbar-right">
		        <li><Link to={`/`} className="pure-menu-link  l-box">Browse</Link></li>
		        <li><Link to={`search`} className="pure-menu-link  l-box">Search</Link></li>
		        <li><Link to={`update`} className="pure-menu-link  l-box">Update</Link></li>
		      </ul>
		    </div>
		  </div>
		</nav>
		)
	}
}

