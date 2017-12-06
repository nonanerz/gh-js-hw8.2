import React, { Component } from 'react'
import { HashRouter, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarHeader, NavbarToggle, NavItem } from 'react-bootstrap';


class HeaderComponent extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <header className="header">
                <Navbar collapseOnSelect className="header-navigation">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <h1><a href="#"><img src={require('../images/3-layers.png')} alt=""/></a></h1>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight className="menu">
                            <NavItem eventKey={1} href="#">Home</NavItem>
                            <NavItem eventKey={2} href="#services">Services</NavItem>
                            <NavItem eventKey={3} href="#portfolio">Portfolio</NavItem>
                            <NavItem eventKey={4} href="#team">Our Team</NavItem>
                            <NavItem eventKey={5} href="#blog">Blog</NavItem>
                            <NavItem eventKey={6} href="#contact">Contact Us</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        )
    }
}

export default HeaderComponent