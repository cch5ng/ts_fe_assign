import { useState, useEffect } from 'react';

import logo from '../images/logo.svg';
import searchIcon from '../images/search-icon.svg';
import './App.css';

const App = () => (
	<div className="app">
		<header>
			<div>
				<img src={logo} alt="Timescale" />
			</div>

			<div className="input-icons">
            <img src={searchIcon} className="icon" />
            <input className="input-field" type="text" />
			</div>
		</header>
		<main>

		</main>
	</div>
)

export default App;
