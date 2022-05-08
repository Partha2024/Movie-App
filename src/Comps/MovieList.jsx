import React from 'react'
import { useState } from 'react';
import './MovieList.css'

export default function MovieList(props) {

    const [moviesDetail, setMoviesDetail] = useState()
    const [catalouge, setCatalouge] = useState(true)

    async function card(movie){
        setCatalouge(false)
        console.log(movie.Title)
        const url = `http://www.omdbapi.com/?t=${movie.Title}&apikey=588aec62`;
        const response = await fetch(url);
        const responseJson = await response.json();
        console.log(responseJson)
        if (responseJson.Search) {
            setMoviesDetail(responseJson.Search);
        }
    }

    return (
        <div className='movieDiv'>
			{props.movies.map((movie, index) => (
				<div className='imageContainer' key={index} onClick={()=>card(movie)}>
					<img src={movie.Poster} alt='movie'></img>
                    <div className='titleDiv'>{movie.Title}</div>
				</div>
			))}
		</div>
    )
}
