import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteContact) => {},
  removeFavorite: (contactId) => {},
  itemIsFavorite: (contactId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteContact) {
    setUserFavorites((previousUserFavorites) => {
      return previousUserFavorites.concat(favoriteContact);
    });
  }

  function removeFavoriteHandler(contactId) {
    setUserFavorites((previousUserFavorites) => {
      return previousUserFavorites.filter((item) => item.id !== contactId);
    });
  }

  function itemIsFavoriteHandler(contactId) {
    return userFavorites.some((contact) => contact.id === contactId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
