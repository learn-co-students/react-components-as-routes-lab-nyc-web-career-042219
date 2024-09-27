import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
        {actors.map(actor=>
          <div>
            <h2>Name: {actor.name}</h2>
            <p>Movies:
              <ul>
                {actor.movies.map(movie=>
                  <li>{movie}</li>)}
              </ul>
            </p>
          </div>
        )}
    </div>
  );
};

export default Actors;
