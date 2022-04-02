import React from 'react';
import Special from '../Special/Special';

const MySelf = ({house, ornament}) => {
    return (
        <div>
            <h1>MySelf</h1>
            <p><small>House :{house}</small></p>
            <Special></Special>
        </div>
    );
};

export default MySelf;