import React, { Component } from 'react';
import { Button } from '../Button';
import { MenuItems } from './MenuItems';
import { Link } from 'react-scroll';
import './Navbar.css';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">JB <i className="fas fa-headphones"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <Link key={index} activeClass="active" className={item.cName} to={item.url} spy={true} smooth={true} duration={1000}>
                                {item.title}
                            </Link>
                        )
                    })}                    
                </ul>  
            </nav>
        )
    }
}

export default Navbar;