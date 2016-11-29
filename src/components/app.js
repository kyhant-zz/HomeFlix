import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import NavBar from './NavBar';
import Browse from './Browse';
import Search from './Search';
import Update from './Update';

export default function App(){
  return (
  		<Router history={browserHistory}>
	    	<Route path="/" component={Browse} />
	    	<Route path="/search" component={Search} />
	    	<Route path="/update" component={Update} />
	    </Router>
	)
}