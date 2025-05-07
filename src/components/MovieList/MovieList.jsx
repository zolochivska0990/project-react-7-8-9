
import React, { useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.scss';

const MovieList = ({ movies }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="movie-list-container">
      <div className="header">
        <h2>Сьогодні в кінотеатрі</h2>
        <input
          type="text"
          placeholder="Пошук фільмів..."
          className="search-input"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="movie-grid">
        {filteredMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;