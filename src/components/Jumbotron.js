import React, { Component } from 'react';
import { Button } from './Button';

class Jumbotron extends Component {
    render() {
        return(
            <div class="jumbotron text-center">
                <div class="container container-jumbotron">
                    <div class="jumbotron-text-box py-5">
                        <h1 class="display-4">Hi, I'm Jay Bisa.</h1>
                        <h2>I build software to solve complex problems.</h2>
                    </div>
                    <div class="button">
                        <p class="lead"><a class="btn btn-primary btn-lg" href="#" role="button">Resume</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Jumbotron;