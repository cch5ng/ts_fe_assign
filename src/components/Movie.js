import './Movie.css';

const Movie = ({ movie }) => {
  const imgUrl = `${process.env.REACT_APP_API_BASE_IMAGE_URL}${movie.poster_path}`;
  return (
    <div className="movie_container">
      <div className="vote">{movie.vote_average}</div>
      <div className="poster_container"><img className="poster" src={imgUrl} alt="poster image" /></div>
      <div className="title">{movie.title}</div>
    </div>
  )
}

export default Movie;