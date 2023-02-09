import React from 'react';
import './style.css';
import { Route, Routes } from 'react-router-dom';

import AllContactsPage from './pages/AllContacts';
import NewContactPage from './pages/NewContact';
import FavoritesPage from './pages/Favorites';

import MainNavigation from './components/layout/MainNavigation';

export default function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" exact element={<AllContactsPage />} />
        <Route path="new-contact" exact element={<NewContactPage />} />
        <Route path="favorites" exact element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}
