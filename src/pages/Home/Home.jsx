
import React from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { movies } from '../../data/movies';
import './Home.scss';

const Home = () => {
  return (
    <div className="home-page">
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;