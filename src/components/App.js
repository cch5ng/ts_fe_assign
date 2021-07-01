import { useState, useEffect } from 'react';

import logo from '../images/logo.svg';
import searchIcon from '../images/search-icon.svg';
import Movie from './Movie';
import './App.css';

const App = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {

//sample url
//
		const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&region=US&release_date.lte=2021-07-01&with_release_type=2|3`;
		fetch(url)
			.then(resp => resp.json())
			.then(json => {
				console.log('json', json)
				if (json.results) {
					setMovies(json.results);
				}
			})
			.catch(err => console.error(err))


	}, []);

	const getSortedMovies = () => {
		return movies.sort((a, b) => {
			if (a.release_date < b.release_date) {
				return 1;
			}
			if (a.release_date > b.release_date) {
				return -1;
			}
			return 0;
		})
	}

	let sortedMovies = movies.length ? getSortedMovies(): [];
	console.log('sortedMovies', sortedMovies);

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
				<div className="movies_list_container">
					{sortedMovies.map(movie => (
						<Movie key={movie.id} movie={movie}/>
					))}
	
				</div>
	
			</main>
		</div>
	)
}

export default App;