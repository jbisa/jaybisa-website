import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return(
            <section id="#contact" className="container py-5 section">
                <h1>Contact</h1>
                <p><a className="btn btn-primary btn-lg jumbotron-button" href="mailto:jay.bisa@gmail.com" role="button">Get In Touch</a></p>
            </section>
        )
    }
}

export default Contact;