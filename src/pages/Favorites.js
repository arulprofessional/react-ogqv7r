import React, { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import ContactList from '../components/contact/ContactList';
import Layout from '../components/layout/Layout';
import '../style.css';

export default function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;
  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <ContactList items={favoritesCtx.favorites} />;
  }

  return (
    <Layout>
      <h1>My Favorites</h1>
      {content}
    </Layout>
  );
}
