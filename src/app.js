import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import NavBar from './components/NavBar';
import Browse from './components/Browse';
import Search from './components/Search';
import Update from './components/Update';

export default function App() {
  return (
	  	<Router history={browserHistory}>
	    	<Route path="/" component={Browse} />
	    	<Route path="/search" component={Search} />
	    	<Route path="/update" component={Update} />
	    </Router>
  );
}

