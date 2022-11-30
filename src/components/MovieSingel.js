import React from 'react';

const MovieSingel = ({movie}) => {
	return (
	  <div>
			<div className='col-sm'>
			<div className='col-sm'><h5>{movie.title}</h5>
				<img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} /></div>
			
				
			</div>
	  </div>
	);
  };

export default MovieSingel;