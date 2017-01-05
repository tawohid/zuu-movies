import React from 'react';
import tmdb from '../tmdb';
import DocumentTitle from 'react-document-title';
import StarRatingComponent from 'react-star-rating-component';

import Header from './Header';
import CastArray from './CastArray';
import MovieArray from './MovieArray';


class MoviePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {movie : {}, id: "", cast: [], similar: []}
        this.getData(this.props.params.id);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({movie : {}, id: "", cast: [], similar: []})
        this.getData(nextProps.params.id)
    }


    getData(id) {
        tmdb.call("/movie/" + id, {"append_to_response" : "videos,recommendations,credits"}, data => {
            data.recommendations.results.splice(6)
            data.credits.cast.splice(6)

            this.setState({
                movie: data,
                id : data.imdb_id,
                cast: data.credits.cast,
                similar: data.recommendations.results})
        })
    }



    duration(a) {
    let hours = Math.trunc(a/60);
    let minutes = a % 60;
    return hours +"h "+ minutes+"m";
}


    render() {
       const movie = this.state.movie;
       const title = `${(movie.title) || "Movies"} | ZUU`

       return (
           <DocumentTitle title={title}>
           <div className="moviepage">
               <Header />
               <img className="backdrop" src={"http://image.tmdb.org/t/p/w1280" + (movie.backdrop_path || "/ylEALgMyJu1JLzSQOIaGGNctHS0.jpg") } alt="no"/>
               <div className="backdropbg"></div>
               <div className="playposter">
                   <img className="moiveposter" src={"http://image.tmdb.org/t/p/w185" + (movie.poster_path || "/AdoSOsacA5MquZruWeBZVgQ7fSm.jpg") } alt="no"/>
                   <div className="playbutton">
                       <p className="playnow">Play Now</p>
                       <i className="icon-play"></i>
                   </div>
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
                       value={Math.round((movie.vote_average || 0)/2)}/></li>
                   <li className="score">{(movie.vote_average || 0).toFixed(1)} IMDB</li>
               </ul>
               <div className="movieoverview">
                   <p className="overviewtitle">Overview</p>
                   <p className="overviewtext">{movie.overview}</p>
               </div>
               {this.state.cast[0] && <CastArray data={this.state.cast}/>}
               {this.state.similar[0] && <MovieArray name="similar" data={this.state.similar}/>}
           </div>
           </DocumentTitle>
       )
   }

}
export default MoviePage;


