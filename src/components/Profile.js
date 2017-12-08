import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';


class Profile extends  Component {
    render() {
        return(
            <li className="team-member col-sm-6 col-md-3">
                <div className="team-image"></div>
                <h3 className="team-name">{this.props.name}</h3>
                <span>CEO / Founder</span>
                <p className="information">
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                    consectetur, adipisci velit...
                </p>
                <ul className="social-links">
                    <li><a href="#" className="twitter-icon"><FontAwesome className='' name='twitter' /></a></li>
                    <li><a href="#" className="pinterest-icon"><FontAwesome className='' name='pinterest' /></a></li>
                    <li><a href="#" className="facebook-icon"><FontAwesome className='' name='facebook' /></a></li>
                    <li><a href="#" className="google-icon"><FontAwesome className='' name='google-plus' /></a></li>
                    <li><a href="#" className="linked-icon"><FontAwesome className='' name='linkedin' /></a></li>
                </ul>
            </li>
        );
    }
}

export default Profile