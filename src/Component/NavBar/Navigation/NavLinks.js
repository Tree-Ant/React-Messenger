import React from 'react';

import './NavLinks.css'

const navLinks = (props) => {
    return (
        <div className='NavLinks'>            
            <nav>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>Other</a></li>
                </ul>                
            </nav>
        </div>
    )
}

export default navLinks;

