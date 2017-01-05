import React from 'react'
import { Link } from 'react-router'

const Movie = props => {
    let pagelink = "/movie/" + props.movie.id

    return (
        <li className="movie-item">
            <Link to={pagelink}>
                <img className="bgimg" src={"http://image.tmdb.org/t/p/w185" + props.movie.poster_path} alt="no"/>
                <img className="posterimg" src={"http://image.tmdb.org/t/p/w185" + props.movie.poster_path} alt="no"/>

                <div className="movietitle">
                    <h6>{props.movie.title}</h6>
                </div>
            </Link>
        </li>
    )
}

export default Movie