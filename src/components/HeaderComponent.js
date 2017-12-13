import React, { Component } from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap';



class HeaderComponent extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        document.location.replace(event.target.getAttribute('href'))
    }

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
                            <NavItem onClick={this.handleClick} href="#home">Home</NavItem>
                            <NavItem onClick={this.handleClick} href="#services">Services</NavItem>
                            <NavItem onClick={this.handleClick} href="#portfolio">Portfolio</NavItem>
                            <NavItem onClick={this.handleClick} href="#team">Our Team</NavItem>
                            <NavItem onClick={this.handleClick} href="#blog">Blog</NavItem>
                            <NavItem onClick={this.handleClick} href="#contact">Contact Us</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        )
    }
}

export default HeaderComponent