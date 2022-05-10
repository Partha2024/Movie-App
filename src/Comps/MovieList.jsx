import React from 'react'
import { useState } from 'react';
import './MovieList.css'

export default function MovieList(props) {

    const [moviesDetail, setMoviesDetail] = useState({
        Genre : "Animation, Adventure, Comedy"
    });
    const [loader, setLoader] = useState(false)
    var genres = moviesDetail.Genre;
    var genArr = genres.split(',');

    async function card(movie){
        const url = `http://www.omdbapi.com/?t=${movie.Title}&apikey=588aec62`;
        const response = await fetch(url);
        const responseJson = await response.json();
        setMoviesDetail(responseJson);
        setLoader(true)
    }

    function close(){
        setLoader(false)
    }

    // useEffect(()=>{
    //     console.log("useEffect")
    //     card()
    // })

    return (
        <>
            {loader ? 
                <div className='container'>
                <div className='bg'>
                    <div className='blurDiv'/>
                    <img className='bgImage' src={moviesDetail.Poster} alt="" />
                    <div className='detailDiv'>
                        <img id='poster' src={moviesDetail.Poster} alt="" />
                        <div className='textDiv'>
                            <p id='title'>{moviesDetail.Title}</p> 
                            <p id='year'>{moviesDetail.Year}</p>
                            <p id='genre'>{genArr[0]}&nbsp;&nbsp;|&nbsp;{genArr[1]}&nbsp;&nbsp;|&nbsp;{genArr[2]}</p>
                            <p id='ratingTime'>{moviesDetail.Rated}&nbsp;&nbsp;|&nbsp;{moviesDetail.Runtime}</p>
                            <p id='plot'>{moviesDetail.Plot}</p>
                            <hr/>
                            <p>Movie Details</p>
                            <div id='movieDetail'>
                                <p id='director'>Director &nbsp;-&nbsp; {moviesDetail.Director}</p>
                                <p id='director'>Writer &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp; {moviesDetail.Writer}</p>
                                <p id='director'>Starring &nbsp;-&nbsp; {moviesDetail.Actors}</p>
                                <p id='director'>Origin &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp; {moviesDetail.Country}</p>
                                <p id='director'>Awards &nbsp;&nbsp;-&nbsp; {moviesDetail.Awards}</p>
                            </div>
                        </div>
                        <div id='ver'></div>
                        <div id='tags'>
                            
                            {moviesDetail.imdbRating ? <div id='capsule'>
                                IMDB : {moviesDetail.imdbRating}
                            </div> : null }

                            {moviesDetail.Ratings[1] ? <div id='capsule'>
                                Rotten Tomatoes : {moviesDetail.Ratings[1].Value}
                            </div> : null }

                            {moviesDetail.Ratings[2] ? <div id='capsule'>
                                Metacritic : {moviesDetail.Ratings[2].Value}
                            </div> : null }
                            
                            {moviesDetail.BoxOffice ? <div id='capsule'>
                                BoxOffice : {moviesDetail.BoxOffice}
                            </div> : null }
                            
                        </div>
                        <i className="fa-solid fa-xmark closeIcon" onClick={()=>close()} ></i>
                    </div>
                </div>
            </div>
            :
            <div className='movieDiv'>
                    {props.movies.map((movie, index) => (
                        <div className='imageContainer' key={index} onClick={()=>card(movie)}>
                            <img className='moviePosterImg' src={movie.Poster} alt='movie'></img>
                            <div className='titleDiv'>{movie.Title}</div>
                        </div>
                    ))}
                </div> 
            }
            {/* {loader ? loader && <Card moviesDetail = {moviesDetail}/> :
                <div className='movieDiv'>
                    {props.movies.map((movie, index) => (
                        <div className='imageContainer' key={index} onClick={()=>card(movie)}>
                            <img className='moviePosterImg' src={movie.Poster} alt='movie'></img>
                            <div className='titleDiv'>{movie.Title}</div>
                        </div>
                    ))}
                </div> 
            } */}
            {/* {loader ? null : <button className='testBtn' onClick={()=>card()}>GO</button>}
            {loader ? <Card moviesDetail = {moviesDetail}/> : null} */}
        </>
    )
}
