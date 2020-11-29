import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return(
            <footer className="footer py-3">
                <div className="text-center text-muted">
                    Designed & Built by Jay Bisa: <a href="https://github.com/jbisa/jaybisa-website" target="_blank" rel="noreferrer"><img src="github.png" alt="Github Logo"/></a>
                </div>
            </footer>
        )
    }
}

export default Footer;