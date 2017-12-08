import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import PortfolioItem from "./PortfolioItem";


class Portfolio extends  Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <ScrollableAnchor id={'portfolio'}>
                <section className="portfolio section">
                    <div className="container">
                        <h2 className="section-title section-title-white">Our Portfolio</h2>
                        <ul className="portfolio-images row">
                            <PortfolioItem
                                classes={"col-xs-12 col-sm-6"}
                            />

                            <PortfolioItem
                                classes={"col-xs-12 col-sm-6"}
                            />

                            <PortfolioItem
                                classes={"col-xs-offset-1 col-xs-10 col-sm-offset-0 col-sm-6 col-md-3"}
                            />

                            <PortfolioItem
                                classes={"col-xs-offset-1 col-xs-10 col-sm-offset-0 col-sm-6 col-md-3"}
                            />

                            <PortfolioItem
                                classes={"col-xs-offset-1 col-xs-10 col-sm-offset-0 col-sm-6 col-md-3"}
                            />

                            <PortfolioItem
                                classes={"col-xs-offset-1 col-xs-10 col-sm-offset-0 col-sm-6 col-md-3"}
                            />
                        </ul>
                    </div>
                </section>
            </ScrollableAnchor>
        )
    }
}
export default Portfolio