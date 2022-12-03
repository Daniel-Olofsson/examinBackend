import React from 'react'
import {useParams, useEffect ,useState} from "react"


function MoviePage(props) {

  return (
    <div>
		<div>
			<h1>{props.movie.title}</h1>
		</div>
    </div>
  )
}

export default MoviePage