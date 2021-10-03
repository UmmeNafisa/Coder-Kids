import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../logo/logo-1.png'
import './Header.css'

const Header = () => {
    const navStyle = {
        fontWeight: "bold",
        color: "blue"
    }
    return (
        <div>
            <Navbar bg="light" >
                <Container>
                    <NavLink to="/home">
                        <img
                            src={logo}
                            width="280"
                            height="80"
                            className="d-inline-block align-top"
                            alt="Kids Coder logo" />
                    </NavLink>
                    <Nav className="mx-auto">
                        <NavLink className="nav-link" activeStyle={navStyle} to="/home">Home</NavLink>
                        <NavLink className="nav-link" activeStyle={navStyle} to="/about">About Us</NavLink>
                        <NavLink className="nav-link" activeStyle={navStyle} to="/courses">Courses</NavLink>
                        <NavLink className="nav-link" activeStyle={navStyle} to="/registration">Registration</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;