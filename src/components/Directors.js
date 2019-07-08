import React from 'react';
import { directors } from '../data';

class Directors extends React.Component {

	displayDirectors = () => {
		return directors.map(director => {
			return(
				<div>
				{director.name}
				{director.movies.map(genre => <ul>{genre}</ul>)}
				</div>
			)
		})
	}

	render(){
  return (
    <div>
    	<h1>Directors Page</h1>
    	{this.displayDirectors()}
    </div>
  );
};
}
export default Directors;
