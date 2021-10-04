import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../logo/logo-1.png'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const navStyle = {
        fontWeight: "bold",
        color: "blue",
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <NavLink to="/home">
                    <img
                        src={logo}
                        width="280"
                        height="80"
                        classNameName="d-inline-block align-top"
                        alt="Coder kids logo" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <Nav className="mx-auto">
                        <NavLink className="nav-link" activeStyle={navStyle} to="/home">Home</NavLink>
                        <NavLink className="nav-link" activeStyle={navStyle} to="/about">About Us</NavLink>
                        <NavLink className="nav-link" activeStyle={navStyle} to="/courses">Courses</NavLink>
                        <NavLink className="nav-link" activeStyle={navStyle} to="/registration">Sign Up</NavLink>
                        <NavLink className="nav-link" activeStyle={navStyle} to="/logIn">Log-In </NavLink>
                        <NavLink activeStyle={navStyle} to="/select"> <button className="border-0 bg-light text-info px-2 fs-4">  <FontAwesomeIcon icon={faClipboardCheck} />0</button> </NavLink>
                    </Nav>
                </div>
            </div>
        </nav>
    );
};

export default Header;