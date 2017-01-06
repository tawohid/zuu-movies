import React from 'react';
import tmdb from '../tmdb';
import _ from 'lodash'
import DocumentTitle from 'react-document-title';

import Header from './Header'
import MovieArray from './MovieArray'

class SearchPage extends React.Component  {
    constructor(props) {
        super(props)

        this.state = {searchresults: []}
        this.getData("Harry Potter")
    }

    getData(term) {
        tmdb.call("/search/movie", {"query": term}, data => {
            let results = [];

            data.results.map(movie => { // eslint-disable-line
             if(movie.poster_path) {
                 results.push(movie)
             }
            })

            this.setState({searchresults: results})
        })
    }


    render() {
        const videoSearch = _.debounce(term => this.getData(term), 300)
        return (
            <DocumentTitle title="Search | ZUU">
                <div className="searchpage">

                    <div className="searchcover">
                        <Header search={true} onSearchTermChange={videoSearch}/>
                    </div>

                    {this.state.searchresults[0] && <MovieArray data={this.state.searchresults}/>}

                </div>
            </DocumentTitle>

        )
    }
}

export default SearchPage