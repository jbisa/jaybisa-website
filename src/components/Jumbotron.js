import React, { Component } from 'react';
import { Button } from './Button';

class Jumbotron extends Component {
    render() {
        return(
            <div className="jumbotron text-center">
                <div className="container container-jumbotron">
                    <div className="jumbotron-text-box py-5">
                        <h1 className="display-4">Hi, I'm Jay Bisa.</h1>
                        <h2>I build software to solve complex problems.</h2>
                    </div>
                    <div className="button">
                        <p className="lead"><a className="btn btn-primary btn-lg" href="#" role="button">Resume</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Jumbotron;