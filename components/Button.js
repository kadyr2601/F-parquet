import React from 'react';

function Button(props) {
    return (
        <div className={'btn'}>{props.title}</div>
    );
}

export default Button;