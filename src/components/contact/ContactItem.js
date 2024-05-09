import React, { useContext } from 'react';
import '../../style.css';

import classes from './ContactItem.module.css';
import Card from '../ui/Card';
import FavoritesContext from '../../store/favorites-context';

export default function ContactItem(props) {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.data.id);

  function toggleFavoritesStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.data.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.data.id,
        title: props.data.title,
        name: props.data.name,
        phoneNumber: props.data.phoneNumber,
        email: props.data.email,
        address: props.data.address,
        description: props.data.description,
      });
    }
  }

  return (
    <li key={props.id} className={classes.item}>
      <Card>
        <div className={classes.item}>
          <h3>{props.data.title}</h3>
          <h4>{props.data.name}</h4>
          <h4>{props.data.phoneNumber}</h4>
          <h4>{props.data.email}</h4>
          <address>{props.data.address}</address>
          <p>{props.data.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoritesStatusHandler}>
            {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
}
