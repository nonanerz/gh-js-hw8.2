import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import ScrollableAnchor from 'react-scrollable-anchor'
import Article from "./Article";


class Blog extends  Component {
    render() {
        return (
            <ScrollableAnchor id={'blog'}>
                <section className="section blog">
                    <div className="container">
                        <h2 className="section-title section-title-white">The Latest News</h2>
                        <ul className="articles-list row">
                            <Article/>
                            <Article/>
                            <Article/>
                        </ul>
                    </div>
                </section>
            </ScrollableAnchor>
        )
    }
}

export default Blog