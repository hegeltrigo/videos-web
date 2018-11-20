import React from 'react'
import classes from './Button.css'

const button = () => (
  <button
         className={[classes.Button, classes[props.buttonType]].join(' ')}
         onClick={props.clicked}
         >
    {props.children}
  </button>
);

export default button;