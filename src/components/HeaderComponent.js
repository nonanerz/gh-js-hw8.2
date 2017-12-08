import React, { Component } from 'react'
import { Nav, Navbar, MenuItem, NavbarCollapse, NavbarHeader, NavbarToggle } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor'



class HeaderComponent extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <ScrollableAnchor id={'home'}>

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
                            <MenuItem eventKey={1} href="#home">Home</MenuItem>
                            <MenuItem eventKey={2} href="#services">Services</MenuItem>
                            <MenuItem eventKey={3} href="#portfolio">Portfolio</MenuItem>
                            <MenuItem eventKey={4} href="#team">Our Team</MenuItem>
                            <MenuItem eventKey={5} href="#blog">Blog</MenuItem>
                            <MenuItem eventKey={6} href="#contact">Contact Us</MenuItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
            </ScrollableAnchor>
        )
    }
}

export default HeaderComponent