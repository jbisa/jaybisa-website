import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return(
        <section id="#contact" className="container section-last">
            <h1 className="header" data-aos="fade-up">Contact</h1>
            <p data-aos="fade-up">Although I'm not seeking new opportunities at the moment, my inbox is always open. Feel free to reach out and I will get back to you as soon as possible!</p>
            <p data-aos="fade-up"><a className="btn btn-primary btn-lg jumbotron-button" href="mailto:jay.bisa@gmail.com" role="button">Get In Touch</a></p>
        </section>
    )
}

export default Contact;