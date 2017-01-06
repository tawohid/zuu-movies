import React from 'react'
import { Link } from 'react-router'
import StarRatingComponent from 'react-star-rating-component';


const Popular = props => {
    let pagelink = "/movie/" + props.data.id
    return (
        <div className="popular">
            <div className="heading">
                <h3>Popular Movies</h3>
            </div>

            <img src={"https://image.tmdb.org/t/p/w1280" + props.data.backdrop_path} className="bgcover" alt="no"/>
            <Link to={pagelink}>
            <div className="pinfo">
                <img src={"https://image.tmdb.org/t/p/w185" + props.data.poster_path} className="poster" alt="no"/>

                <div className="details">
                    <h2>{props.data.title}</h2> <span className="date">({props.data.release_date.split("-")[0]})</span>
                    <p className="overview">{props.data.overview}</p>
                    <div className="info">
                        <p className="duration">{Math.random() < 0.5 ? 1 : 2}h {Math.floor(Math.random() * 56) + 10 }m</p>
                        <StarRatingComponent
                            className="stars"
                            name="rating"
                            starColor="#26d2cc"
                            emptyStarColor="#193240"
                            renderStarIcon={() => <span>✮&nbsp;</span>}
                            editing={false}
                            starCount={5}
                            value={Math.round((props.data.vote_average)/2)}
                        />
                        <p className="score">{props.data.vote_average.toFixed(1)} IMDB</p>
                    </div>

                </div>

            </div>
            </Link>
        </div>

    )
}

export default Popular