import React from 'react';
import tmdb from '../tmdb';
import DocumentTitle from 'react-document-title';
import StarRatingComponent from 'react-star-rating-component';
import Modal from 'boron/DropModal'
import { browserHistory } from 'react-router'

import Header from './Header';
import CastArray from './CastArray';
import MovieArray from './MovieArray';


class MoviePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {movie : {}, id: "", cast: [], similar: []}

    }


    componentWillMount(){
        if(!this.props.params.id) {
            browserHistory.push(`/search`)
        }
        this.getData(this.props.params.id);
    }

    componentWillReceiveProps(nextProps) {
        if(!nextProps.params.id) {
            browserHistory.push(`/search`)
        }
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
        }, data => console.log(data))
    }

    showModal() {
        this.refs.modal.show();
    }


    duration(a) {
        let hours = Math.trunc(a/60);
        let minutes = a % 60;
        return hours +"h "+ minutes+"m";
    }


    render() {
       const movie = this.state.movie;
       const title = `${(movie.title) || "Movies"} | ZUU`;
       const year = (movie.release_date || '2017-01-01').split("-")[0];


       return (

           <DocumentTitle title={title}>
           <div className="moviepage">
               <Header back={true} />
               <div className="backdropbg">
                   <img className="backdrop" src={"https://image.tmdb.org/t/p/w1280" + (movie.backdrop_path || "/ylEALgMyJu1JLzSQOIaGGNctHS0.jpg") } alt="no"/>
                   <h1 className="moviename">{movie.title || "Loading..."}</h1>
               </div>
               <div className="playposter">
                   <img className="movieposter" src={"https://image.tmdb.org/t/p/w185" + (movie.poster_path || "/AdoSOsacA5MquZruWeBZVgQ7fSm.jpg") } alt="no"/>
                   <div onClick={this.showModal.bind(this)} className="playbutton">
                       <p className="playnow">Play Now</p>
                       <i className="icon-play"></i>
                   </div>
                   <Modal ref="modal" backdropStyle={{backgroundColor: '#193240'}} modalStyle={{width: "90%", height: "90%"}}>
                       <div className="videocontainer">
                           <iframe style={{height: "90vh", border: "none", zIndex: 3000}} src={`https://api.vodlocker.to/embed?t=${movie.title}&y=${year}&poster=0&chromecast=0&trailer=0`} width="100%"></iframe>
                       </div>
                       <a className="fullscreenbutton button" href={`https://database.gdriveplayer.us/player.php?tmdb=${movie.id}`}> Enter Fullscreen</a>
                   </Modal>
               </div>
               <ul className="pagedetails">
                   <li className="dicon icon-date"></li>
                   <li className="releasedate">{movie.release_date}</li>
                   <li className="dicon icon-duration"></li>
                   <li className="runtime">{this.duration(movie.runtime || 0)}</li>
                   <li className="startmdb"><StarRatingComponent
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
               {this.state.similar[0] && <div className="moviecontainer"><p className="similarheading">SIMILAR</p><MovieArray data={this.state.similar}/></div>}
           </div>
           </DocumentTitle>
       )
   }

}
export default MoviePage;


