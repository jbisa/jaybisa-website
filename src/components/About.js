import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
        return(
            <section id="#about" className="container py-5 section">
                <h1>About</h1>
                <p>I'm Jay and I'm a Software Engineer based in Boston, MA.</p>
                <p>
                    Since 2016, I've been working at Wayfair, an e-commerce company focused on creating a best-in-class customer experience shopping for furniture and home-goods.
                    I'm a Backend Engineer on the Supplier Capabilities Engineering team, where we've been building software to adjust ship date estimations and two-day delivery
                    guarantee badges that customers see on site, based on supplier performance metrics. My team has built scalable software to gather performance metrics data,
                    testable and maintainable software to consume the data to automatically adjust ship date estimations or badging eligibility, and domain driven software to
                    expose the results and underlying data to external teams via Kafka streams. We also built a scalable .NET web service (as well as a library), to calculate
                    ship date estimations on-the-fly, which consumes 4000 req/sec, all while meeting client SLAs!
                </p>
                <p>Here are the technologies I've been using recently:</p>
                <ul className="list">
                    <li>C#</li>
                    <li>Apache Kafka</li>
                    <li>Redis</li>
                    <li>Aerospike</li>
                    <li>SQL Server</li>
                    <li>Google BigQuery</li>
                    <li>Apache Hive</li>
                    <li>Kubernetes</li>
                    <li>Docker</li>
                </ul>
                <p>Outside of work, when I'm not working on a side project, I like to produce music on Logic Pro X and DJ on Twitch!</p>
            </section>
        )
    }
}

export default About;