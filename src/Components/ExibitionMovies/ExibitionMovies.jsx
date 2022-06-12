import React, {useState} from 'react'
import './ExibitionMovies.scss'
import moviesData from "../../movies.json";
import MovieCard from '../MovieCards/MovieCard'


function ExibitionMovies(props) {

  return (
   
    <div className='exibition-movies'>
    {
      props.movies.map((movie, index) => {
          return (
            <>
            <MovieCard
            movie={movie}
            tuggleButton={props.tuggleButton}
            index={index}
            
          
             />
          
          </>
          );
        })
    }
      
    </div>
  )
}

export default ExibitionMovies