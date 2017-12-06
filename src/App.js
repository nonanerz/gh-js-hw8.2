import React, { Component } from 'react';
import './App.css';

import HeaderComponent from './components/HeaderComponent'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Team from './components/Team'
import Blog from './components/Blog'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

class App extends Component {
    render() {
        return (
            <div className="App">
                <HeaderComponent/>
                <Hero/>
                <Services/>
                <Portfolio/>
                <Team/>
                <Blog/>
                <Contacts/>
                <Footer/>
            </div>
        );
    }
}

export default App;
