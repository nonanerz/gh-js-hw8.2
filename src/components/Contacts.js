import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'


class Contacts extends  Component {
    render() {
        return (
            <ScrollableAnchor id={'contact'}>
                <div>
                    <p>Contact</p>
                </div>
            </ScrollableAnchor>
        )
    }
}

export default Contacts