import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Boxes.css'

const Education = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return(
        <section id="#education" className="container py-5 section">
            <h1>Education</h1>
            <div className="grids">
                <div data-aos="flip-left" className="boxes">Syracuse University</div>
                <div data-aos="flip-right" className="boxes">Worcester Polytechnic Institute</div>
            </div>
        </section>
    );
}

export default Education;