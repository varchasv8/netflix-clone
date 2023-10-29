import React, { useEffect, useState } from 'react';
import "./Row.css"
import axios from '../axios';

// function Row(title, fetchUrl, isLargeRow) {
//   return (
//     <div className="row">
//         <h2 className="row__title">{title}</h2>

//     </div>
//   )
// }

function Row(props) {
    const [movies, setMovies] = useState([]);

    useEffect(()=> {
        async function fetchData() {
            const request = await axios.get(props.fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[props.fetchUrl]);

    // console.log(movies); 

    const baseURL = "https://image.tmdb.org/t/p/original/"

    return (
        <div className="row">
            <h2 className="row__title">{props.title}</h2>
            <div className="row__posters">
                {movies.map(movie => (
                    (
                        ((props.isLargeRow && movie.poster_path) || (!props.isLargeRow && movie.backdrop_path)) 
                        && 
                        (
                        <img
                            key={movie.id}
                            className={`movie__poster ${props.isLargeRow && "large"}`} 
                            src={`${baseURL}${props.isLargeRow? movie.poster_path : movie.backdrop_path}`} 
                            alt={movie.name} />
                        )
                    )
                ))}
            </div>
            
        </div>
    )
}
  
export default Row