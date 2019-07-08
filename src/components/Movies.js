import React from 'react';
import { movies } from '../data';

class Movies extends React.Component {

	displayMovies = () => {
		return movies.map(movie => {
			return(
				<div>
				{movie.title}
				{movie.time}
				{movie.genres.map(genre => <ul>{genre}</ul>)}
				</div>
			)
		})
	}

	render(){
  return (
    <div>
    	<h1>Movies Page</h1>
    	{this.displayMovies()}
    </div>
  );
};
}
export default Movies;
