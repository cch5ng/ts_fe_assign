import './Movie.css';

const Movie = ({ movie, handleModalOpen }) => {
  const imgUrl = `${process.env.REACT_APP_API_BASE_IMAGE_URL}${movie.poster_path}`;
  return (
    <div className="movie_container" onClick={(ev) => handleModalOpen(ev)}>
      <div className="vote">{movie.vote_average}</div>
      <div className="poster_container"><img id={movie.id} className="poster" src={imgUrl} alt="movie poster" /></div>
      <div className="title">{movie.title}</div>
    </div>
  )
}

export default Movie;