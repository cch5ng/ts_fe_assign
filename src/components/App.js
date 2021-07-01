import { useState, useEffect } from 'react';
import moment from 'moment';

import logo from '../images/logo.svg';
import searchIcon from '../images/search-icon.svg';
import Movie from './Movie';
import Modal from './Modal';
import './App.css';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');
	const [displayModal, setDisplayModal] = useState(false);
	const [modalId, setModalId] = useState(null);

	const handleQueryUpdate = (ev) => {
		const {value} = ev.target;
		setSearchQuery(value);
	}

	const handleModalOpen = (ev) => {
		const {id} = ev.target;
		if (id) {
			setModalId(id);
			setDisplayModal(!displayModal);
		}
	}

	const handleModalClose = () => {
		setDisplayModal(false);
		setModalId(null);
	}

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

	useEffect(() => {
		let url;
		if (!searchQuery) {
			let curDate = moment().format('YYYY-MM-DD');
			url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&region=US&release_date.lte=${curDate}&with_release_type=2|3`;
		} 
		if (searchQuery) {
			url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&region=US&query=${searchQuery}`			
		}
		fetch(url)
			.then(resp => resp.json())
			.then(json => {
				if (json.results) {
					setMovies(json.results);
				}
			})
			.catch(err => console.error(err))
	}, [searchQuery]);

	let sortedMovies = movies.length ? getSortedMovies(): [];
	let moviesDict = {};
	movies.forEach(movie => {
		moviesDict[movie.id] = movie;
	});
	let modalMovie = moviesDict[modalId];

	return (
		<div className="app">
			<header>
				<div>
					<img src={logo} alt="Timescale" />
				</div>
	
				<div className="input-icons">
					<img src={searchIcon} className="icon" alt="search icon" />
					<input className="input-field" type="text" placeholder="Search for a movie"
						value={searchQuery} onChange={handleQueryUpdate} />
				</div>
			</header>
			<main>
				<h1>Most Recent Movies</h1>
				<div className="movies_list_container">
					{sortedMovies.map(movie => (
						<Movie key={movie.id} movie={movie} handleModalOpen={handleModalOpen} />
					))}
	
				</div>
				{displayModal && modalMovie && (
					<Modal movie={modalMovie} handleModalClose={handleModalClose} />
				)}
			</main>
		</div>
	)
}

export default App;