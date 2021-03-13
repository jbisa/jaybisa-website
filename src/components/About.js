import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return(
        <section id="#about" className="container py-5 section">
            <h1 className="header" data-aos="fade-up">About</h1>
            <p data-aos="fade-up">I'm Jay and I'm a Software Engineer based in Boston, MA.</p>
            <p data-aos="fade-up">
                Since 2016, I've been working at <strong className="highlight">Wayfair</strong>, an e-commerce company focused on creating a best-in-class customer experience shopping for furniture and home-goods.
                I'm a <strong className="highlight">Backend Engineer</strong> on the Supplier Capabilities Engineering team, where we've been building software to adjust ship date estimations and two-day delivery
                guarantee badges that customers see on site, based on supplier performance metrics. My team has built <strong className="highlight">scalable</strong> software to gather performance metrics data, 
                <strong className="highlight"> testable</strong> and <strong className="highlight">maintainable</strong> software to consume the data to automatically adjust ship date estimations or badging eligibility, and <strong className="highlight">domain driven</strong> software to
                expose the results and underlying data to external teams via Kafka streams. We also built a scalable .NET web service (as well as a library), to calculate
                ship date estimations on-the-fly, which consumes <strong className="highlight">4000 requests/second</strong>, all while meeting client SLAs.
            </p>
            <p data-aos="fade-up">Here are the technologies I've been using recently:</p>
            <ul data-aos="fade-up" className="list">
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
            <p data-aos="fade-up">Outside of work, when I'm not working on a side project, I like to produce music on Logic Pro X and DJ on <a href="https://www.twitch.tv/jayletsgetit" target="_blank">Twitch!</a></p>              
        </section>
    )
}

export default About;