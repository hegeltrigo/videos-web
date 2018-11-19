import React from 'react';
import utubeLogo from '../../assets/images/logo-white.png';
import classes from './Logo.css'

const logo = () => (
 <div className={classes.Logo}>
   <img src={utubeLogo} alt="Utube Logo"/>
 </div>
);

export default logo;