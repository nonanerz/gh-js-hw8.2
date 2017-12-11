import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import ScrollableAnchor from 'react-scrollable-anchor';


class Contacts extends  Component {
    render() {
        return (
            <ScrollableAnchor id={'contact'}>
                <section className="section contact">
                    <div className="container">
                        <div className="row">
                            <h2 className="section-title">Contact Us</h2>
                            <div className="col-lg-6">
                                <form action="#" className="contact-form">
                                    <ul>
                                        <li><input type="text" placeholder="Full Name" name="name" className="name" id="name" /></li>
                                        <li><input type="email" placeholder="E-mail Address" name="email" className="email" id="email" /></li>
                                        <li><textarea name="message" id="message" placeholder="Message" /></li>
                                    </ul>
                                </form>
                            </div>
                            <div className="col-lg-6 information">
                                <h3>Information</h3>
                                <p>
                                    Proin nec dignissim tellus, ut hendrerit erat. Vivamus ut augue ac
                                    est sagittis ullamcorper a porttitor nibh. Donec non tortor consequat,
                                    sollicitudin odio id, vehicula lorem. Suspendisse a euismod sem. Mauris
                                    rutrum arcu a lorem aliquet feugiat. Praesent tincidunt lacus at
                                    nisl pharetra, nec suscipit risus lobortis. Nunc vitae enim a quam ultrices
                                    faucibus. Proin sit amet condimentum libero, ac dignissim enim.
                                    Praesent aliquam lacinia dapibus.

                                </p>
                                <ul className="info-list">
                                    <li>
                                        <span>
                                            <FontAwesome className='' name='map-marker' />
                                            StreetName 163, 254 23 City
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <FontAwesome className='' name='phone' />
                                            (+254) 001 454 333 66
                                        </span>
                                    </li>
                                </ul>
                                <div className="buttons">
                                    <button className="button">Send Message</button>
                                    <button className="button">View Map</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollableAnchor>
        )
    }
}

export default Contacts