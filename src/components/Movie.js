import React from 'react';
import { NavLink, useParams} from 'react-router-dom';
import MoviePage from './MoviePage';


export default function Movie(props) {
	const handleClick = () => {
		props.placeMovie(props.index);
	} 
	

	return (
	  <div>
		
			<div className='col-sm'>
				<div className='col-sm'><h5>{props.movie.title}</h5>
			</div>
				<li><NavLink onClick={handleClick} to={`/MoviePage`}><img src={"https://image.tmdb.org/t/p/w500" + props.movie.backdrop_path} alt={props.movie.path}/></NavLink></li>
				<h3>Score:{props.movie.vote_average}</h3>
			</div>
		
	  </div>
	);
  };

