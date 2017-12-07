import React, { Component } from 'react'

class Profile extends  Component {
    render() {
        return(
            <div className="profile">
                <div className="profile-info">
                    <img className="profile-img" src={require('../images/symfony-con-berlin-2016-mascot.png')}/>
                    <div className="profile-name">{this.props.name}</div>
                    <div>CEO / Founder</div>
                    <span>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</span>
                    <div>
                        <img className="social-links" src={require('../images/twitter.png')}/>
                        <img className="social-links" src={require('../images/pinterest.png')}/>
                        <img className="social-links" src={require('../images/facebook.png')}/>
                        <img className="social-links" src={require('../images/g-.png')}/>
                        <img className="social-links" src={require('../images/linkedin.png')}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile