import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import Service from "./Service";


class Services extends  Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <ScrollableAnchor id={'services'}>
                <section className="section services">
                    <div className="container">
                        <div className="row">
                            <h2 className="section-title">Our Services</h2>
                            <ul className="services-list">
                                <Service
                                    text={"Sed fermentum, ante vel sagittis adipiscing, purus nisi ultrices dolor, a aliquam nunc lacus in turpis. Nunc molestie nisi diam. Donec commodo quam sit amet mauris pellentesque, in commodo lorem venenatis. Nullam consequat venenatis fringilla."}
                                    header={"HTML 5 & CSS3"}
                                    img={"design-analysis.png"}
                                />
                                <Service
                                    text={
                                        "Sed fermentum, ante vel sagittis adipiscing, purus nisi ultrices dolor, a aliquam nunc lacus in turpis. Nunc molestie nisi diam. Donec commodo quam sit amet mauris pellentesque, in commodo lorem venenatis. Nullam consequat venenatis fringilla."}
                                    header={"SEO Optimization"}
                                    img={'free-consultation.png'}
                                />
                                <Service
                                    text={"Sed fermentum, ante vel sagittis adipiscing, purus nisi ultrices dolor, a aliquam nunc lacus in turpis. Nunc molestie nisi diam. Donec commodo quam sit amet mauris pellentesque, in commodo lorem venenatis. Nullam consequat venenatis fringilla."}
                                    header={"SEO Optimization"}
                                    img={'graphic-design.png'}
                                />
                            </ul>
                        </div>
                    </div>
                </section>
            </ScrollableAnchor>
        )
    }
}

export default Services