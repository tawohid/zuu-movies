import React from 'react';
import tmdb from '../tmdb'
import StarRatingComponent from 'react-star-rating-component';

import Header from './Header'
import CastArray from './CastArray'
import MovieArray from './MovieArray'


class MoviePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {movie : {}, id: "", cast: [], similar: []}
        tmdb.call("/movie/" + this.props.params.id, {"append_to_response" : "videos,recommendations,credits"}, data => this.setState({movie: data, id : data.imdb_id, cast: data.credits.cast, similar: data.recommendations.results}));
    }

    componentWillReceiveProps(nextProps) {
        this.setState({movie : {}, id: "", cast: [], similar: []})
        tmdb.call("/movie/" + nextProps.params.id, {"append_to_response" : "videos,recommendations,credits"}, data => this.setState({movie: data, id : data.imdb_id, cast: data.credits.cast, similar: data.recommendations.results}))
    }



    duration(a) {
    let hours = Math.trunc(a/60);
    let minutes = a % 60;
    return hours +"h "+ minutes+"m";
}


    render() {
       this.state.similar.splice(6)
       this.state.cast.splice(6)
       const movie = this.state.movie
       const id = this.state.id.replace("tt", "")
       const rating = movie.vote_average || 0



       return (
           <div className="moviepage">
               <Header />
               <img className="backdrop" src={"http://image.tmdb.org/t/p/w1280" + (movie.backdrop_path || "/ylEALgMyJu1JLzSQOIaGGNctHS0.jpg") } alt="no"/>
               <img className="moiveposter" src={"http://image.tmdb.org/t/p/w185" + (movie.poster_path || "/AdoSOsacA5MquZruWeBZVgQ7fSm.jpg") } alt="no"/>
               <div className="playbutton">
                   <p className="playnow">Play Now</p>
                   <i className="icon-play"></i>
               </div>
               <h1 className="moviename">{movie.title || "Loading..."}</h1>
               <ul className="pagedetails">
                   <li className="dicon icon-date"></li>
                   <li>{movie.release_date}</li>
                   <li className="dicon icon-duartion"></li>
                   <li>{this.duration(movie.runtime || 0)}</li>
                   <li><StarRatingComponent
                       name="rating"
                       starColor="#26d2cc"
                       emptyStarColor="#193240"
                       renderStarIcon={() => <span>✮&nbsp;</span>}
                       editing={false}
                       starCount={5}
                       value={Math.round((rating)/2)}/></li>
                   <li className="score">{rating.toFixed(1)} IMDB</li>
               </ul>
               <div className="movieoverview">
                   <p className="overviewtitle">Overview</p>
                   <p className="overviewtext">{movie.overview}</p>
               </div>
               {this.state.cast[0] && <CastArray data={this.state.cast}/>}
               {this.state.similar[0] && <MovieArray name="similar" data={this.state.similar}/>}
           </div>

       )
   }

}
export default MoviePage;


