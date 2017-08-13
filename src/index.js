import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import './index.css';
import bgimg from '.bgimg.png';

import Homepage from './components/Homepage'
import MoviePage from './components/MoviePage'
import SearchPage from './components/SearchPage'

ReactDOM.render(
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
        <Route path="/" component={Homepage}/>
        <Route path="/movie" component={MoviePage} >
            <Route path="/movie/:id" component={MoviePage}/>
        </Route>
        <Route path="/search" component={SearchPage} />
    </Router>,
  document.getElementById('root')
);
