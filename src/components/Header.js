import React from 'react';
import {browserHistory} from "react-router";

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
                <li className="icon icon-fire"></li>
                <li className="icon icon-combined-shape"></li>
                <li className="icon icon-search"></li>
                <li className="signup">Sign Up</li>
            </ul>
    )
}

export default Header;