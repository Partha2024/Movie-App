import React, { useState } from 'react';
import './App.css';
import MovieList from './Comps/MovieList';

function App() {

    const [movieName, setMovieName] = useState();
    const [movies, setMovies] = useState([]);

    async function go(){
        const url = `http://www.omdbapi.com/?s=${movieName}&apikey=588aec62`;
        const response = await fetch(url);
        const responseJson = await response.json();
        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }else{
            alert("Movie Not Found")
        }
    }

    // useEffect(()=>{
    //     go();
    // },[])

    return (
        <div className='container'>

            <div className="header">  
                <span className="heading">Movie Catalouge</span>
                <span className='searchArea'>
                    <input type="text" name="movieName" id="searchBar" onChange={(e)=>setMovieName(e.target.value)} placeholder = "Type Movie Name"/>   
                    <button type='submit' className="runBtn" onClick = {()=> go()}>Go</button>
                </span>
            </div>

			<MovieList movies={movies}/>
		</div>
    );
}

export default App;
