import React, {useState} from 'react';
import data from '../data/data';
import Movie from './Movie';
import moment from 'moment';
import WatchedList from './WatchedList';
const MovieList = () => {
    const [watched, setWatched] = useState([]);
    const [keyWord, setKeyWord] = useState('');
    const [movies, setMovies] = useState(data);
    const logTime = (movie) => {
        // console.log("I have been clicked!")
        // console.log(moment().format('lll'));
        setWatched([...watched,{
            id: movie.id,
            title: movie.title,
            time: moment().format('lll')
        }])
    };

    const filterMovies = (e) => {
        setKeyWord(e.target.value)
        
        const filteredMovies = movies.filter(movie => {
            return movie.title.includes(keyWord)
        })
        if (e.target.value) {
            setMovies(filteredMovies)
        } else {
            setMovies(data)
        }
    }

    return ( 

        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            <div style={{width: '100%'}}>
            <input type='text' name='search' value={keyWord} placeholder='Search...' onChange={filterMovies} />
            </div>
            <div>
                {movies.map(movie => {
                    return (
                    
                        <Movie id={movie.id} title={movie.title} description={movie.description} logMovieTime={logTime} movie={movie} />
                    
                    )
                })}
            </div>

            <WatchedList watched={watched} />
        </div>
      );
}
 
export default MovieList;