import React, { Component } from 'react';
import NavBar from './NavBar';
import Browse from './Browse';

export default class App extends Component {
  render() {
    return (
    	<div>
    		<NavBar />
      	<Browse />
      </div>
    );
  }
}
