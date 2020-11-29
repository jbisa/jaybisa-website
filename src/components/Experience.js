import React, { Component, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Boxes.css'

const Experience = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return(
        <section id="#experience" className="container py-5 section">
            <h1>Experience</h1>
            <p>Here's my journey so far...</p>
            <div className="grids">
                <div data-aos="fade-left" className="boxes">Wayfair</div>
                <div data-aos="fade-right" className="boxes">Veracode</div>
                <div data-aos="fade-left" className="boxes">Morpho Detection, Inc.</div>
            </div>
        </section>
    );
}

export default Experience;