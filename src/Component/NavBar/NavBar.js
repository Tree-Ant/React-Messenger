import React, { Component } from 'react';

import Title from './Title/Title';
// import NavLinks from './Navigation/NavLinks';

import './NavBar.css';

class navBar extends Component {
    render () {
        return (
            <div className='NavBar'>
                <Title name="We Chat" />
                {/* <NavLinks className='Navigation' /> */}
            </div>
        )
    }
}

export default navBar;