import React from 'react'
import { useState } from 'react';
import './MovieList.css'
import Card from './Card';
import { useEffect } from 'react';

export default function MovieList(props) {

    const [moviesDetail, setMoviesDetail] = useState()
    // const [catalouge, setCatalouge] = useState(true)
    const [loader, setLoader] = useState(false)

    async function card(movie){
        // setCatalouge(false)
        
        // console.log(movie.Title)
        // const url = `http://www.omdbapi.com/?t=${movie.Title}&apikey=588aec62`;
        const url = `http://www.omdbapi.com/?t=aquaman&apikey=588aec62`;
        const response = await fetch(url);
        const responseJson = await response.json();

        console.log("responseJson", responseJson.Title)
        console.log("type responseJson", typeof responseJson)
        console.log("responseJson", responseJson)
        
        setMoviesDetail(responseJson);
        console.log("movieDetial",moviesDetail)
        setLoader(true)
    }

        // useEffect(()=>{
        //     console.log("useEffect")
        //     card()
        // })

    return (
        <>
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
        {loader ? null : <button className='testBtn' onClick={()=>card()}>GO</button>}
        {loader ? <Card moviesDetail = {moviesDetail}/> : null}
            
        </>
    )
}
