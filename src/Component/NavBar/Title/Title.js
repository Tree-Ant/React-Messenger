import React from 'react';

import './Title.css';

const title = (props) => {
    return (
        <div className='Title'>
            <h1>{props.name}</h1>            
        </div>
    )
}

export default title;