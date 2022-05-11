import React from 'react'
import { useState } from 'react';
import './CSS/Home.css'
import Card from './Card';
import { Routes, Route, Link } from "react-router-dom"
export default function Home() {

    const [movieName, setMovieName] = useState();
    const [movies, setMovies] = useState([]);
    const [moviesDetail, setMoviesDetail] = useState({
        Genre : "Animation, Adventure, Comedy",
        Ratings: ""
    });

    async function go(){
        const url = `https://www.omdbapi.com/?s=${movieName}&apikey=588aec62`;
        const response = await fetch(url);
        const responseJson = await response.json();
        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }else{
            alert("Movie Not Found")
        }
    }

    async function card(movie){
        console.log("got clicked")
        console.log(movie.Title)
        const url = `https://www.omdbapi.com/?t=${movie.Title}&apikey=588aec62`;
        const response = await fetch(url);
        const responseJson = await response.json();
        console.log(responseJson)
        setMoviesDetail(responseJson);
    }

    return (
        <>
        <Routes>
            <Route path="detail" element={ <Card moviesDetail = {moviesDetail} /> } />
        </Routes>
            <div className='container'>
                <div className="header">  
                    <span className="heading">Movie Catalogue</span>
                    <span className='searchArea'>
                        <input type="text" name="movieName" id="searchBar" onChange={(e)=>setMovieName(e.target.value)} placeholder = "Type Movie Name"/>   
                        <button type='submit' className="runBtn" onClick = {()=> go()}>Go</button>
                    </span>
                </div>
            </div>
            {/* --------------------------- */}
            <div className='movieDiv'>
                {movies.map((movie, index) => (
                    <Link id="link" to="detail" key={index}>
                        <div className='imageContainer'  >
                            <img className='moviePosterImg' src={movie.Poster} alt='movie' onClick={()=>card(movie)}></img>
                            <div className='titleDiv'>{movie.Title}</div>
                        </div>
                    </Link>
                ))}
            </div> 
        </>
    )   
}
