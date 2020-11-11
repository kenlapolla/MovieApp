import React from 'react';

const WatchedList = (props) => {
    return ( 
        <div>
            <p>
                <u>Watched Movies</u>
            </p>
            {props.watched.map((movie)=>{
                return (
                <div>
                    <h1>{movie.title}</h1>
                    <p>Time Watched: {movie.time}</p>
                </div>
                )
            })}
        </div> 
    );
}
 
export default WatchedList;