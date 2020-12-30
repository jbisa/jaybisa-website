import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import CanvasJSReact from '../canvasjs.react';

const Skills = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const options = {
        animationEnabled: true,
        animationDuration: 2000,
        theme: "dark2",
        height: 500,
        backgroundColor: "#14213D",
        title:{
            text: "Proficiency of Skills",
            fontFamily: 'Titillium Web',
            padding: 20
        },
        axisX: {
            reversed: true,
            margin: 30
        },
        axisY: {
            includeZero: true,
            maximum: 5,
            interval: 1,
            margin: 30
        },
        data: [{
            type: "bar",
            dataPoints: [
                { y:  5, label: "Software Development" },
                { y:  4, label: "C#" },
                { y:  4, label: "Java" },
                { y:  4, label: "Leadership" },
                { y:  3, label: "PHP" },
                { y:  3, label: "SQL" },
                { y:  3, label: "Apache Kafka" },                
                { y:  3, label: "Google BigQuery" },
                { y:  3, label: "Docker" },
                { y:  2, label: "ReactJS" },
                { y:  2, label: "Kubernetes" }
            ]
        }]
    }

    return(
        <section id="#skills" className="container py-5 section">
            <h1 className="header" data-aos="fade-up">Skills</h1>
            <ul data-aos="fade-up" className="list">
                <li>0 - No Experience</li>
                <li>1 - Fundamental Awareness</li>
                <li>2 - Novice</li>
                <li>3 - Intermediate</li>
                <li>4 - Advanced</li>
                <li>5 - Expert</li>
            </ul>
            <div data-aos="fade-up"><CanvasJSReact.CanvasJSChart options = {options}/>{}</div>
        </section>
	);
}

export default Skills;