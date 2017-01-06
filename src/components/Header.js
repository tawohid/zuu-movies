import React from 'react';
import {browserHistory, Link} from "react-router";

const Header = props => {
    let topright;
    if (props.back) {
        topright = <li onClick={browserHistory.goBack} className="back">
            <i className="icon-play"></i><p className="backtext">back</p>
        </li>
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

export default Header;