import { useState, useEffect } from 'react';

import logo from '../images/logo.svg';
import searchIcon from '../images/search-icon.svg';
import './App.css';

const App = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {

//sample url
//
		const url = `https://api.themoviedb.org/3/discover/movie?api_key={process.env.REACT_APP_MOVIE_DB_API_KEY}&language=de-DE&region=DE&release_date.gte=2016-11-16&release_date.lte=2016-12-02&with_release_type=2|3`;


	}, []);

	return (
		<div className="app">
			<header>
				<div>
					<img src={logo} alt="Timescale" />
				</div>
	
				<div className="input-icons">
							<img src={searchIcon} className="icon" />
							<input className="input-field" type="text" placeholder="Search for a movie"/>
				</div>
			</header>
			<main>
				<h1>Most Recent Movies</h1>
				<div>
	
				</div>
	
			</main>
		</div>
	)
}

export default App;