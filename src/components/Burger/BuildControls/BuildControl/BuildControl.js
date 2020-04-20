import React from 'react';

import classes from './BuildControl.module.css'

const buildControl = (props) => (
    <div className={classes.buildControl}>
        <div>{props.label}</div>
        <button
            onClick={props.added}
            >
                More
        </button>
        <button
            onClick={props.subtracted}
            disabled={props.disabled}
            >
                Less
        </button>
    </div>
);

export default buildControl;