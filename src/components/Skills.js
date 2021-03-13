import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Skills.css'
import CanvasJSReact from '../canvasjs.react';

const Skills = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const techSkills = {
        animationEnabled: true,
        animationDuration: 2000,
        theme: "dark2",
        height: 500,
        backgroundColor: "#14213D",
        title:{
            text: "Technical Skills",
            fontFamily: 'Titillium Web',
            padding: 20
        },
        axisX: {
            reversed: true,
            margin: 30,
            interval: 1
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
                { y:  3, label: "PHP" },
                { y:  1, label: "Go" },
                { y:  1, label: "Python" },
                { y:  3, label: "SQL" },
                { y:  2, label: "ReactJS" },
                { y:  3, label: "Apache Kafka" },  
                { y:  3, label: "Google BigQuery" },
                { y:  1, label: "Machine Learning" },
                { y:  2, label: "Kubernetes" },
                { y:  2, label: "Docker" },
                { y:  3, label: "Design Patterns" },
                { y:  4, label: "Test Automation" }
            ]
        }]
    }

    const softSkills = {
        animationEnabled: true,
        animationDuration: 2000,
        theme: "dark2",
        height: 500,
        backgroundColor: "#14213D",
        title:{
            text: "Soft Skills",
            fontFamily: 'Titillium Web',
            padding: 20
        },
        axisX: {
            reversed: true,
            margin: 30,
            labelAutoFit: true,
            interval: 1
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
                { y:  5, label: "Leadership" },
                { y:  4, label: "Mentoring" },
                { y:  5, label: "Teamwork" },
                { y:  3, label: "Interpersonal Skills" },
                { y:  3, label: "Communication" },
                { y:  4, label: "Adaptability" },
                { y:  4, label: "Problem Solving" },
                { y:  4, label: "Creativity" },
                { y:  5, label: "Work Ethic" },
                { y:  3, label: "Time Management" }
            ]
        }]
    }

    return(
        <section id="#skills" className="container py-5 section-skills">
            <h1 className="header" data-aos="fade-up">Skills</h1>
            <ul data-aos="fade-up" className="list">
                <li>0 - No Experience</li>
                <li>1 - Beginner</li>
                <li>2 - Average</li>
                <li>3 - Skilled</li>
                <li>4 - Specialist</li>
                <li>5 - Expert</li>
            </ul>
            <div className="chart" data-aos="fade-up"><CanvasJSReact.CanvasJSChart options = {techSkills}/>{}</div>
            <div className="chart" data-aos="fade-up"><CanvasJSReact.CanvasJSChart options = {softSkills}/>{}</div>
        </section>
	);
}

export default Skills;