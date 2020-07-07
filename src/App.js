// 1. Third-party library / (S)CSS
import React from 'react';
import WebFont from 'webfontloader';

// 2. Custom (S)CSS / Resource filess
import './App.scss';
import logo from '~/assets/images/logo.svg';

// 3. Local modules


WebFont.load({
	google: {
		families: ['Roboto:400,400i,500,700'],
	},
});

export default function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}
