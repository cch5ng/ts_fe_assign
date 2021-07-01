import moment from 'moment';

import './Modal.css';
import closeIcon from '../images/close-icon.svg';

const Modal = ({ movie, handleModalClose }) => {
  const imgUrl = `${process.env.REACT_APP_API_BASE_IMAGE_URL}${movie.poster_path}`;

  const getFormattedDate = () => {
    return moment(movie.release_date).format('MMM D, YYYY');
  }

  return (
    <div className="modal_container">
      <div className="modal_box">
        <div className="modal_header">
          <div className="modal_title">{movie.title}</div>
          <div onClick={handleModalClose}><img alt="close modal icon" src={closeIcon} /></div>
        </div>
        <div className="modal_body">
          <div className="modal_body_el">
            <img src={imgUrl} className="modal_image" alt="movie poster" />
          </div>
          <div className="modal_body_el">
            <div className="modal_description"><span className="bold">Release Date:</span> {getFormattedDate()}</div>
            <div className="modal_description">{movie.overview}</div>
            <div className="modal_description"><span className="bold">{movie.vote_average}</span> / 10 ({movie.vote_count} total votes)</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;