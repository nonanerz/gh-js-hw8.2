import React, { Component } from 'react'

class Service extends  Component {
    render () {
        return (
            <li className="single-service col-sm-4">
                <img src={require('../images/' + this.props.img)} alt="design" />
                <h3>{this.props.header}</h3>
                <p>{this.props.text}</p>
            </li>
        )
    }
}

export default Service