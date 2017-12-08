import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';

class Blog extends  Component {
    render() {
        return (
            <section className="section blog" id="blog">
                <div className="container">
                    <h2 className="section-title section-title-white">The Latest News</h2>
                    <ul className="articles-list row">
                        <li className="single-article col-sm-6 col-md-4">
                            <article>
                                <a href="#"><img src={require('../images/img-here-news.png')} alt="article-image" /></a>
                                <h3 className="article-title"><a href="#">Theme HotelDeluxe Released</a></h3>
                                <span className="publish-date">
                                    <FontAwesome className='' name='calendar' />
                                    15th September, 21:24
                                </span>
                                <p className="excerpt">
                                    Nunc vitae euismod orci, sit amet hendrerit est. Nulla id ipsum rhoncus, porttitor ipsum ut, tempus libero.
                                    Morbi eget justo gravida, ornare ipsum interdum, imperdiet sapien. Pellentesque vitae ipsum dui.
                                    Vivamus a dolor urna. Cras posuere eros eu odio aliquet tincidunt. Sed at consequat nulla. Nulla luctus dapibus nulla.
                                    Lorem ut, tempus libero. Morbi eget justo gravida, ornare ipsum interdum, imperdiet sapien.
                                    Pellentesque vitae ipsum dui. Vivamus a dolor urna. Cras posuere eros eu odio aliquet tincidunt.
                                    Sed at consequat nulla. Nulla luctus dapibus nulla...
                                </p>
                                <span className="author"><FontAwesome className='' name='user' />Dan Aase</span>
                                <span className="number-comments"><FontAwesome className='' name='comments-o' />21 Comments</span>
                            </article>
                        </li>
                        <li className="single-article col-sm-6 col-md-4">
                            <article>
                                <a href="#"><img src={require('../images/img-here-news.png')} alt="article-image" /></a>
                                <h3 className="article-title"><a href="#">Theme HotelDeluxe Released</a></h3>
                                <span className="publish-date">
                                    <FontAwesome className='' name='calendar' />
                                    15th September, 21:24
                                </span>
                                <p className="excerpt">
                                    Nunc vitae euismod orci, sit amet hendrerit est. Nulla id ipsum rhoncus, porttitor ipsum ut, tempus libero.
                                    Morbi eget justo gravida, ornare ipsum interdum, imperdiet sapien. Pellentesque vitae ipsum dui.
                                    Vivamus a dolor urna. Cras posuere eros eu odio aliquet tincidunt. Sed at consequat nulla. Nulla luctus dapibus nulla.
                                    Lorem ut, tempus libero. Morbi eget justo gravida, ornare ipsum interdum, imperdiet sapien.
                                    Pellentesque vitae ipsum dui. Vivamus a dolor urna. Cras posuere eros eu odio aliquet tincidunt.
                                    Sed at consequat nulla. Nulla luctus dapibus nulla...
                                </p>
                                <span className="author"><FontAwesome className='' name='user' />Dan Aase</span>
                                <span className="number-comments"><FontAwesome className='' name='comments-o' />21 Comments</span>
                            </article>
                        </li>
                        <li className="single-article col-sm-6 col-md-4">
                            <article>
                                <a href="#"><img src={require('../images/img-here-news.png')} alt="article-image" /></a>
                                <h3 className="article-title"><a href="#">Theme HotelDeluxe Released</a></h3>
                                <span className="publish-date">
                                    <FontAwesome className='' name='calendar' />
                                    15th September, 21:24
                                </span>
                                <p className="excerpt">
                                    Nunc vitae euismod orci, sit amet hendrerit est. Nulla id ipsum rhoncus, porttitor ipsum ut, tempus libero.
                                    Morbi eget justo gravida, ornare ipsum interdum, imperdiet sapien. Pellentesque vitae ipsum dui.
                                    Vivamus a dolor urna. Cras posuere eros eu odio aliquet tincidunt. Sed at consequat nulla. Nulla luctus dapibus nulla.
                                    Lorem ut, tempus libero. Morbi eget justo gravida, ornare ipsum interdum, imperdiet sapien.
                                    Pellentesque vitae ipsum dui. Vivamus a dolor urna. Cras posuere eros eu odio aliquet tincidunt.
                                    Sed at consequat nulla. Nulla luctus dapibus nulla...
                                </p>
                                <span className="author"><FontAwesome className='' name='user' />Dan Aase</span>
                                <span className="number-comments"><FontAwesome className='' name='comments-o' />21 Comments</span>
                            </article>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Blog