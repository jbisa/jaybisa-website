import React, { Component } from 'react';
import Resume from '../assets/jay-bisa-resume-2021.pdf'

class Jumbotron extends Component {
    render() {
        return(
            <div className="jumbotron text-center">
                <div className="container container-jumbotron">
                    <div className="jumbotron-text-box py-5">
                        <h1 className="display-4">Hi, I'm Jay Bisa.</h1>
                        <h2>I build software to solve business problems!</h2>
                    </div>
                    <div className="button">
                        <p className="lead">
                            <a className="btn btn-primary btn-lg jumbotron-button" href={Resume} target="_blank" role="button">Resume</a>
                            <a className="btn btn-primary btn-lg jumbotron-button" href="mailto:jay.bisa@gmail.com" role="button">Get In Touch</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Jumbotron;