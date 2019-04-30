import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import style from './navbar.module.css';

import { connect } from 'react-redux';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: 'login'
        };
    }
    navLinks(){
        const navLinks = [
            {name: 'Home', link: '/'},
            {name: 'About us', link: '/about'},
            {name: 'News', link: '/news'},
            {name: 'Contacts', link: '/contacts'},
        ]
        return navLinks;
    }
    componentDidMount() {
    }
    componentDidUpdate() {
        if(this.props.dataAuth.user){
            if(this.state.auth === 'login'){
                let stateUser = (this.props.dataAuth.user)?"logout":"login";
                this.setState({auth: stateUser});     
            }
        } 
    }
    render () {
        const navLinks = this.navLinks();
        const stateUser = this.state.auth;
        return(
            <nav className={style.navbar}>
                {navLinks.map(link => (
                    <NavLink to={link.link} className={style.link} key={link.name}>
                        <span className={style.link_inner}>
                            <span className={style.link_tr_l}>
                                <span>{link.name}</span>
                            </span>
                            <span className={style.link_tr_r}>
                                <span>{link.name}</span>
                            </span>
                            <span className={style.link_tr_c}>
                                <span>{link.name}</span>
                            </span>
                        </span>
                    </NavLink>
                ))}
                <NavLink to='/login' className={style.link}>
                    <span className={style.link_inner}>
                        <span className={style.link_tr_l}>
                            <span>{stateUser}</span>
                        </span>
                        <span className={style.link_tr_r}>
                            <span>{stateUser}</span>
                        </span>
                        <span className={style.link_tr_c}>
                            <span>{stateUser}</span>
                        </span>
                    </span>
                </NavLink>
            </nav>
        )
    }
}
const mapStateToProps = state => {
    return {
        dataAuth: state.authReducer.dataAuth,
        authUser: state.authReducer.authUser
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
