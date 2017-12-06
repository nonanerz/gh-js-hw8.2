import React, { Component } from 'react'

class Portfolio extends  Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <section className="portfolio section" id="portfolio">
                <div className="container">
                    <h2 className="section-title section-title-white">Our Portfolio</h2>
                    <ul className="portfolio-images row">
                        <li className="col-xs-12 col-sm-6">
                            <img src={require('../images/img-here-1.png')} alt=""/>
                            <div className="overlay">
                                <div className="overlay-content">
                                    <h3>Love Conquers All</h3>
                                    <div className="overlay-buttons">
                                        <a href="#" className="overlay-btn"><img src={require('../images/view-more.png')} alt=""/></a>
                                        <a href="#" className="overlay-btn"><img src={require('../images/fav.png')} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="col-xs-12 col-sm-6">
                            <img src={require('../images/img-here-2.png')} alt=""/>
                            <div className="overlay">
                                <div className="overlay-content">
                                    <h3>Love Conquers All</h3>
                                    <div className="overlay-buttons">
                                        <a href="#" className="overlay-btn"><img src={require('../images/view-more.png')} alt=""/></a>
                                        <a href="#" className="overlay-btn"><img src={require('../images/fav.png')} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="col-xs-offset-1 col-xs-10 col-sm-offset-0 col-sm-6 col-md-3">
                            <img src={require('../images/img-here-3.png')} alt=""/>
                            <div className="overlay">
                                <div className="overlay-content">
                                    <h3>Love Conquers All</h3>
                                    <div className="overlay-buttons">
                                        <a href="#" className="overlay-btn"><img src={require('../images/view-more.png')} alt=""/></a>
                                        <a href="#" className="overlay-btn"><img src={require('../images/fav.png')} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="col-xs-offset-1 col-xs-10 col-sm-offset-0 col-sm-6 col-md-3">
                            <img src={require('../images/img-here-4.png')} alt=""/>
                            <div className="overlay">
                                <div className="overlay-content">
                                    <h3>Love Conquers All</h3>
                                    <div className="overlay-buttons">
                                        <a href="#" className="overlay-btn"><img src={require('../images/view-more.png')} alt=""/></a>
                                        <a href="#" className="overlay-btn"><img src={require('../images/fav.png')} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="col-xs-offset-1 col-xs-10 col-sm-offset-0 col-sm-6 col-md-3">
                            <img src={require('../images/img-here-5.png')} alt=""/>
                            <div className="overlay">
                                <div className="overlay-content">
                                    <h3>Love Conquers All</h3>
                                    <div className="overlay-buttons">
                                        <a href="#" className="overlay-btn"><img src={require('../images/view-more.png')} alt=""/></a>
                                        <a href="#" className="overlay-btn"><img src={require('../images/fav.png')} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="col-xs-offset-1 col-xs-10 col-sm-offset-0 col-sm-6 col-md-3">
                            <img src={require('../images/img-here-6.png')} alt=""/>
                            <div className="overlay">
                                <div className="overlay-content">
                                    <h3>Love Conquers All</h3>
                                    <div className="overlay-buttons">
                                        <a href="#" className="overlay-btn"><img src={require('../images/view-more.png')} alt=""/></a>
                                        <a href="#" className="overlay-btn"><img src={require('../images/fav.png')} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}
export default Portfolio