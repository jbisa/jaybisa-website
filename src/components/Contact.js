import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return(
        <section id="#contact" className="container py-5 section">
            <h1 data-aos="fade-up">Contact</h1>
            <p data-aos="fade-up"><a className="btn btn-primary btn-lg jumbotron-button" href="mailto:jay.bisa@gmail.com" role="button">Get In Touch</a></p>
        </section>
    )
}

export default Contact;