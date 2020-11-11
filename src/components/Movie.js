import React from 'react';
const Movie = (props) => {
    return ( 
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <button onClick={()=> {props.logMovieTime(props.movie)}}>Watched</button>
        </div>
     );
}
 
export default Movie;