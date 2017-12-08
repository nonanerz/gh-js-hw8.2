import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'


class PortfolioItem extends  Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <li className={this.props.classes}>
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
        )
    }
}
export default PortfolioItem