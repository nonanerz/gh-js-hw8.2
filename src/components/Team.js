import React, { Component } from 'react'
import Profile from "./Profile";

class Team extends  Component {
    render() {
        return (
            <section className="section services">
                <div className="container">
                    <h2 className="section-title">Our Wonderful Team</h2>
                    <Profile name={'George Sjöstedt'}/>
                    <Profile name={'Dan Aase'}/>
                    <Profile name={'Kenneth Eriksson'}/>
                    <Profile name={'Christian Caceres'}/>
                </div>
            </section>
        )
    }
}

export default Team