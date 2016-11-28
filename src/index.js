import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/NavBar';
import App from './components/app';


ReactDOM.render(
	<div>
		<NavBar />
    <App />
  </div>
  , document.querySelector('.container'));
