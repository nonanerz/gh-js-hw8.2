import React, { Component } from 'react'
import Article from "./Article";

class Blog extends  Component {
    render() {
        return (
            <section className="portfolio section">
                <div className="container">
                    <h2 className="section-title section-title-white">The Latest News</h2>
                    <Article/>
                    <Article/>
                    <Article/>
                </div>
            </section>
        )
    }
}

export default Blog