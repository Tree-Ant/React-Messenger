import React from 'react';

import './Message.css';

const message = (props) => (
    <article className='MessageBubble'>
        <h1>{props.message}</h1>
        <p>{props.author}</p>
    </article>
    );


export default message;