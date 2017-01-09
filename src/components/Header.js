import React from 'react';
import Modal from 'boron/DropModal'
import {browserHistory, Link} from "react-router";

class Header extends React.Component  {
    constructor(props){
        super(props)

        this.state = {term: ''};
    }

    showModal() {
        this.refs.modal.show();
    }

    hideModal(e) {
        e.preventDefault()
        this.refs.modal.hide();
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
            <div className="div">
            <ul className="header">
                {topright}
                <li><Link activeClassName="active" className="icon icon-fire" to="/"></Link></li>
                <li><Link activeClassName="active" className="icon icon-combined-shape" to="/movie"></Link> </li>
                <li><Link activeClassName="active" className="icon icon-search" to="/search"></Link></li>
                <li className="signup" onClick={this.showModal.bind(this)}>Sign Up</li>
            </ul>
                <Modal ref="modal" backdropStyle={{backgroundColor: '#193240'}} modalStyle={{width: "360px", height: "550px"}}>
                    <form>
                            <h2>Register Now</h2>
                            <input type="text" placeholder="Name"/>
                            <input type="email" placeholder="Email"/>
                            <input type="password" placeholder="Password"/>

                        <div class="button">
                            <button className="button" onClick={this.hideModal.bind(this)}>SIGN UP</button>
                        </div>
                    </form>
                </Modal>
            </div>
        )
    }
}

export default Header;