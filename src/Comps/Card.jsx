import React from 'react'
import { useState } from 'react';
import "./Card.css"
import MovieList from './MovieList';
export default function Card(props) {

    const [close, setClose] = useState(false)

    var genres = props.moviesDetail.Genre;
    var genArr = genres.split(',');
    console.log(genArr);


    return (
        <div className='container'>
            <div className='bg'>
                <div className='blurDiv'/>
                <img className='bgImage' src={props.moviesDetail.Poster} alt="" />
                <div className='detailDiv'>
                    <img id='poster' src={props.moviesDetail.Poster} alt="" />
                    <div className='textDiv'>
                        <p id='title'>{props.moviesDetail.Title}</p> 
                        <p id='year'>{props.moviesDetail.Year}</p>
                        <p id='genre'>{genArr[0]}&nbsp;&nbsp;|&nbsp;{genArr[1]}&nbsp;&nbsp;|&nbsp;{genArr[2]}</p>
                        <p id='ratingTime'>{props.moviesDetail.Rated}&nbsp;&nbsp;|&nbsp;{props.moviesDetail.Runtime}</p>
                        <p id='plot'>{props.moviesDetail.Plot}</p>
                        <hr/>
                        <p>Movie Details</p>
                        <div id='movieDetail'>
                            <p id='director'>Director &nbsp;-&nbsp; {props.moviesDetail.Director}</p>
                            <p id='director'>Writer &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp; {props.moviesDetail.Writer}</p>
                            <p id='director'>Starring &nbsp;-&nbsp; {props.moviesDetail.Actors}</p>
                            <p id='director'>Origin &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp; {props.moviesDetail.Country}</p>
                            <p id='director'>Awards &nbsp;&nbsp;-&nbsp; {props.moviesDetail.Awards}</p>
                        </div>
                    </div>
                    <div id='ver'></div>
                    <div>
                        
                    </div>
                    <i className="fa-solid fa-xmark closeIcon" ></i>
                </div>
                <div id='tagsDiv'>
                    
                </div>
            </div>
        </div>
    )
}
{/* <span>
                            <span id='span'>{genArr[0]}</span>  <span id='span'>{genArr[1]}</span>  <span id='span'>{genArr[2]}</span>
                        </span> */}