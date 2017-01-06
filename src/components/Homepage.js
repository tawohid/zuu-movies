import React from 'react'
import tmdb from '../tmdb'
import DocumentTitle from 'react-document-title'

import Cover from './Cover'
import MovieArray from './MovieArray'
import Popular from './Popular'



class Homepage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {trending: [], recommended: [], listpopular: [], popular: {}}

        tmdb.call("/movie/popular", {}, data => {
            data.results.splice(7)
            this.setState({trending: data.results.splice(1)})
        })

        tmdb.call("/discover/movie", {"with_genres": "878"}, data => {
            data.results.splice(10)
            this.setState({recommended: data.results.splice(4)})
        })

        tmdb.call("/discover/movie", {"with_genres": "12,18"}, data => {
            data.results.splice(6)
            this.setState({listpopular: data.results, popular: data.results[0] })
        })
    }

    componentDidMount() {
        let num = 1

        this.timerID = setInterval(() => {
            if (num === 5) {
                num = 0
            } else {
                num++
            }
            this.setState({popular: this.state.listpopular[num]
            })}, 4000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <DocumentTitle title="ZUU Movies | Watch Anything, Anywhere">
            <div className="container">

                <Cover/>
                <MovieArray name="trending" data={this.state.trending}/>
                {this.state.listpopular[0] && <Popular data={this.state.popular}/>}
                <MovieArray name="recommended" data={this.state.recommended}/>


            </div>
            </DocumentTitle>


        );
    }
}

export default Homepage