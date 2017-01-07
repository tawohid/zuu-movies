import React from 'react'
import Movie from './Movie'

const MovieArray = props => {
    const movies = props.data.map( movie => <Movie movie={movie} key={movie.id}/>)

    let isSearch;

    if (props.search) {
        isSearch = "search-list";
    } else {
        isSearch = " ";
    }


    return (
        <div className={props.name}>
            <h4>{props.name}</h4>

            <ul className={"movie-list " + isSearch}>
                {movies}
            </ul>

        </div>

    )
}

export default MovieArray