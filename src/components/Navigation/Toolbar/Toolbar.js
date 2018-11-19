import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
const toolbar = () => (
  <header className={classes.Toolbar}>
    <div>
      <Logo></Logo>
    </div>
    <div>
      Search
    </div>
    <nav>
      ...
    </nav>
  </header>
);

export default toolbar;