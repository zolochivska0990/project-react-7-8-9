import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.scss';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="poster-container">
        <img src={movie.poster} alt={movie.title} className="poster" />
        <span className="format-badge">{movie.format}</span>
      </div>
      <div className="content">
        <h3>{movie.title}</h3>
        <div className="meta">
          <span className="genre">{movie.genre}</span>
          <span className="duration">{movie.duration} хв</span>
          <span className="rating">{movie.rating}</span>
        </div>
        <div className="sessions">
          {movie.sessions.slice(0, 3).map((session, i) => (
            <span key={i} className="session">
              {session.time} - {session.price}₴
            </span>
          ))}
        </div>
        <div className="actions">
          <Link to={`/booking/${movie.id}`} className="book-btn">
            Забронювати
          </Link>
          <button className="details-btn">Детально</button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;