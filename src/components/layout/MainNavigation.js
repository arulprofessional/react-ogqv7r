import React from 'react';
// import '../../style.css';
import { Link, Outlet } from 'react-router-dom';

import classes from './MainNavigation.module.css';

export default function MainNavigation() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>
          Add and Fetch Records using React and Firebase
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Contacts</Link>
            </li>
            <li>
              <Link to="/new-contact">Add New Contact</Link>
            </li>
            <li>
              <Link to="/favorites">My Favorites</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
