import React from 'react'
import "./Card.css"

export default function Card(props) {

    var genres = props.moviesDetail.Genre;
    var genArr = genres.split(',');
    console.log(genArr);

    function closefn(){
        
    }
    
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
                        <p id='plot'>{props.moviesDetail.Plot}</p>
                    </div>
                    <i className="fa-solid fa-xmark closeIcon" onClick={closefn()}></i>
                    
                </div>
            </div>
        </div>
    )
}
{/* <span>
                            <span id='span'>{genArr[0]}</span>  <span id='span'>{genArr[1]}</span>  <span id='span'>{genArr[2]}</span>
                        </span> */}