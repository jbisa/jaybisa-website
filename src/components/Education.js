import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Boxes.css'

const Education = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return(
        <section id="#education" className="container py-5 section-edu">
            <h1 className="header" data-aos="fade-up">Education</h1>
            <div className="grids">
                <div data-aos="fade-right">
                    <p className="timeline-year-text">2011-2013</p>
                    <div className="boxes-title-sm">
                        <p className="centered highlight">Syracuse University - MS, Computer Science</p>
                    </div>
                </div>
                <div data-aos="fade-right">
                    <div className="timeline-line"></div>
                    <p className="timeline-year-text">2006-2010</p>
                    <div className="boxes-title-md">
                        <p className="centered highlight">Worcester Polytechnic Institute - BS, Biomedical Engineering - Minor, Electrical & Computer Engineering</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;