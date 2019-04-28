import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import style from './navbar.module.css';

import { connect } from 'react-redux';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navLinks: [
                {name: 'Home', link: '/'},
                {name: 'About us', link: '/about'},
                {name: 'News', link: '/news'},
                {name: 'Contacts', link: '/contacts'},
                {name: 'login', link: '/login'},
                {name: 'logout', link: '/login'},
            ]
        };
    }
    componentDidMount() {
        console.log(this.props.dataAuth);
    }
    componentDidUpdate() {
        console.log(this.props.dataAuth);
        console.log(this.props.dataAuth.user.login);
    }
    render () {
        const dataAuth = this.props.dataAuth.user;
        const navLinks = this.state.navLinks;
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
            </nav>
        )
    }
}
const mapStateToProps = state => {
    return {
        dataAuth: state.authReducer.dataAuth,
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
