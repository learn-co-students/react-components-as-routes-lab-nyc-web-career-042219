import React from 'react';
import { actors } from '../data';

class Actors extends React.Component {

	showActors = () => {
		return actors.map(actor => {
			return(
				<div className="actor">
					{actor.name}
					{actor.movies.map(movie => <ul>{movie}</ul>)}
				</div>
			)
		})
	}

	render(){
	  return (
	    <div>
	      <h1>Actors Page</h1>
	      {this.showActors()}
	    </div>
	  );
	}
};

export default Actors;
