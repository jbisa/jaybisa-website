import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return(
        <section id="#skills" className="container py-5 section">
            <h1 data-aos="fade-up">Skills</h1>
            <p data-aos="fade-up">The following are my skills...</p>
        </section>
    )
}

export default Skills;