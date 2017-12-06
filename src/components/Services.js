import React, { Component } from 'react'

class Services extends  Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <section id="services" className="section">
                <div className="container">
                    <div className="row">
                        <h2 className="section-title">Our Services</h2>
                        <ul className="services-list">
                            <li className="single-service col-sm-4">
                                <img src={require('../images/design-analysis.png')} alt="HTML 5"/>
                                <h3>HTML 5 & CSS3</h3>
                                <p>
                                    Sed fermentum, ante vel sagittis adipiscing, purus nisi ultrices dolor,
                                    a aliquam nunc lacus in turpis. Nunc molestie nisi diam. Donec commodo quam sit amet mauris pellentesque,
                                    in commodo lorem venenatis. Nullam consequat venenatis fringilla.
                                </p>
                            </li>
                            <li className="single-service col-sm-4">
                                <img src={require('../images/free-consultation.png')} alt="Seo"/>
                                <h3>SEO Optimization</h3>
                                <p>
                                    Sed fermentum, ante vel sagittis adipiscing, purus nisi ultrices dolor,
                                    a aliquam nunc lacus in turpis. Nunc molestie nisi diam. Donec commodo quam sit amet mauris pellentesque,
                                    in commodo lorem venenatis. Nullam consequat venenatis fringilla.
                                </p>
                            </li>
                            <li className="single-service col-sm-4">
                                <img src={require('../images/graphic-design.png')} alt="design" />
                                <h3>Graphic Design</h3>
                                <p>
                                    Sed fermentum, ante vel sagittis adipiscing, purus nisi ultrices dolor,
                                    a aliquam nunc lacus in turpis. Nunc molestie nisi diam. Donec commodo quam sit amet mauris pellentesque,
                                    in commodo lorem venenatis. Nullam consequat venenatis fringilla.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default Services