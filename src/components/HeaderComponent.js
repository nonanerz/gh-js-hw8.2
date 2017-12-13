import React, { Component } from 'react'
import { Nav, Navbar, MenuItem } from 'react-bootstrap';



class HeaderComponent extends Component {
    render () {
        return (
            <header className="header">
                <Navbar collapseOnSelect className="header-navigation">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <h1><a href="#home"><img src={require('../images/3-layers.png')} alt=""/></a></h1>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight className="menu">
                            <MenuItem href="#home">Home</MenuItem>
                            <MenuItem href="#services">Services</MenuItem>
                            <MenuItem href="#portfolio">Portfolio</MenuItem>
                            <MenuItem href="#team">Our Team</MenuItem>
                            <MenuItem href="#blog">Blog</MenuItem>
                            <MenuItem href="#contact">Contact Us</MenuItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        )
    }
}

export default HeaderComponent