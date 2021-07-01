import { useState, useEffect } from 'react';

import logo from '../images/logo.svg';
import searchIcon from '../images/search-icon.svg';
import './App.css';

const App = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {

//sample url
//
		const url = `https://api.themoviedb.org/3/discover/movie?api_key={process.env.REACT_APP_MOVIE_DB_API_KEY}&region=US&release_date.lte=2021-07-01&with_release_type=2|3`;
		fetch(url)
			.then(resp => resp.json())
			.then(json => {
				console.log('json', json)
			})
			.catch(err => console.error(err))


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