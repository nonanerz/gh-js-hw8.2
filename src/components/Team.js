import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import ScrollableAnchor from 'react-scrollable-anchor'
import Profile from "./Profile";


class Team extends  Component {
    render() {
        return (
            <ScrollableAnchor id={'team'}>
                <section className="section team">
                    <div className="container">
                        <h2 className="section-title">Our Wonderful Team</h2>
                        <ul className="team-members-list row">
                            <Profile name={'George Sjöstedt'} />
                            <Profile name={'Dan Aase'} />
                            <Profile name={'Kenneth Eriksson'} />
                            <Profile name={'Christian Caceres'} />
                        </ul>
                    </div>
                </section>
            </ScrollableAnchor>
        )
    }
}

export default Team