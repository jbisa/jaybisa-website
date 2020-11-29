import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Boxes.css'

const Experience = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return(
        <section id="#experience" className="container py-5 section">
            <h1 className="header" data-aos="fade-up">Experience</h1>
            <div className="grids">
                <div data-aos="fade-right">
                    <p className="timeline-year-text">2016-Present Day</p>
                    <div className="boxes">Wayfair</div>
                </div>
                <div data-aos="fade-right">
                    <div className="timeline-line"></div>
                    <p className="timeline-year-text">2013-2016</p>
                    <div className="boxes">Veracode</div>
                </div>
                <div data-aos="fade-right">
                    <div className="timeline-line"></div>
                    <p className="timeline-year-text">2012</p>
                    <div className="boxes">Morpho Detection, Inc</div>
                </div>
            </div>
        </section>
    );
}

export default Experience;