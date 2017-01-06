import React from 'react';
import {browserHistory, Link} from "react-router";

class Header extends React.Component  {
    constructor(props){
        super(props)

        this.state = {term: ''};
    }

    render() {
        let topright;


        if (this.props.back) {
            topright = <li onClick={browserHistory.goBack} className="back">
                <i className="icon-play"></i><p className="backtext">back</p>
            </li>
        } else if(this.props.search){

            topright = <input className="searchinput" type="text"
                              placeholder="Search Anything..." onFocus={(e) => e.target.placeholder = ""}
                              value={this.state.term}
                              onChange={e => {
                                  this.setState({term: e.target.value})
                                  this.props.onSearchTermChange(this.state.term)
                              }} />

        } else {
            topright = <li className="icon-logo"></li>
        }

        return (
            <ul className="header">
                {topright}
                <li><Link activeClassName="active" className="icon icon-fire" to="/"></Link></li>
                <li><Link activeClassName="active" className="icon icon-combined-shape" to="/movie"></Link> </li>
                <li><Link activeClassName="active" className="icon icon-search" to="/search"></Link></li>
                <li className="signup">Sign Up</li>
            </ul>
        )
    }
}

export default Header;