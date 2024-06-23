import React, { useContext, useState, useEffect } from 'react';
import FavoritesContext from '../../store/favorites-context';
import '../../style.css';
import { Link, Outlet } from 'react-router-dom';

import classes from './MainNavigation.module.css';

export default function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  // const [isTop, setIsTop] = useState(true);

  // const handleScroll = () => {
  //   if (window.scrollY > 0) {
  //     setIsTop(false);
  //   } else {
  //     setIsTop(true);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

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
              <Link to="/favorites">
                My Favorites
                <span className={classes.badge}>
                  {favoritesCtx.totalFavorites}
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
