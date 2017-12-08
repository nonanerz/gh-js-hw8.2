import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

class Hero extends  Component {
    render() {
        return (
            <ScrollableAnchor id={'home'}>
                <section className="hero section">
                    <div className="container">
                        <div className="hero-content">
                            <div className="hero-information">
                                <h1 className="main-title">ONE PAGE </h1>
                                <span>IS ALL THAT YOU NEED</span>
                                <p className="description">
                                    Suspendisse mi nisl, adipiscing sit amet tellus sed, auctor aliquet felis. Aenean neque elit,
                                    blandit quis tempor eu, feugiat rhoncus lectus. Quisque sit amet pretium risus.
                                </p>
                                <div className="buttons">
                                    <a href="#team" className="button">Our Team</a>
                                    <a href="#contact" className="button">Contact us</a>
                                </div>
                            </div>
                            <div className="hero-image">
                                <img src={require('../images/mac-mock-up.png')} alt=""/>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollableAnchor>
        )
    }
}

export default Hero