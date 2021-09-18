import React, { Fragment } from 'react';
import classes from './Header.module.css';
import calculating from '../assets/calculating.jpg'

function Header() {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>Why invest?</h2>
      </header>
      <div className={classes['main-image']}>
        <img src={calculating} alt='Women calculating.' />
      </div>
    </Fragment>
  );
}

export default Header;
