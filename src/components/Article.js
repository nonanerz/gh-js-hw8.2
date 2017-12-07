import React, { Component } from 'react'

class Article extends  Component {
    render() {
        return(
            <div className="article">
                <img src={require('../images/img-here-news.png')}/>
                <div className="article-title">Theme HotelDeluxe Released</div>
                <p className="article-date"><img className="article-image" src={require('../images/calendar.png')}/> &nbsp; 15th September, 21:24</p>
                <p className="article-text">
                    Nunc vitae euismod orci, sit amet hendrerit est. Nulla id ipsum rhoncus, porttitor ipsum ut, tempus libero. Morbi eget justo gravida, ornare ipsum interdum, imperdiet sapien. Pellentesque vitae ipsum dui. Vivamus a dolor urna. Cras posuere eros eu odio aliquet tincidunt. Sed at consequat nulla. Nulla luctus dapibus nulla.
                </p>
                <span className="article-footer"><img className="article-image" src={require('../images/author-icon.png')}/> &nbsp; Dan Aase <img className="article-image" src={require('../images/comments-icon.png')}/> &nbsp; 21 Comments</span>
            </div>
        );
    }
}

export default Article