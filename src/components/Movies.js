import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => {
        return <div>
          <h2>{movie.title}</h2>
          <h3>{movie.time} minutes</h3>
          <ul>
            {movie.genres.map(genre => {
              return <li>{genre}</li>
            })}
          </ul>
        </div>
      })}
    </div>
  );
};

export default Movies;
