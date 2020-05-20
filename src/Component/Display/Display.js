import React from 'react';

import Header from './Header/Header';
import MessageBoard from './MessageBoard/MessageBoard';

import './Display.css'

const display = (props) => (
    <div className='Display'>
        <Header title ='Message Board' />
        <MessageBoard />
    </div>
)

export default display;