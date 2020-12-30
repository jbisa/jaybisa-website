import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return(
        <section id="#skills" className="container py-5 section">
            <h1 className="header" data-aos="fade-up">Skills</h1>
            <ul data-aos="fade-up" className="list">
                <li>Software Development</li>
                <li>Java</li>
                <li>C#</li>
                <li>Leadership</li>
                <li>Software Architecture</li>
                <li>RESTful APIs</li>
                <li>Apache Kafka</li>
                <li>Redis</li>
                <li>Aerospike</li>
                <li>SQL</li>
                <li>Google BigQuery</li>
                <li>Apache Hive</li>
                <li>Kubernetes</li>
                <li>Docker</li>
            </ul>
        </section>
    )
}

export default Skills;