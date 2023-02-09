import React from 'react';
import './style.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import AllContactsPage from './pages/AllContacts';
import NewContactPage from './pages/NewContact';
import FavoritesPage from './pages/Favorites';

import MainNavigation from './components/layout/MainNavigation';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainNavigation />}>
            <Route index element={<AllContactsPage />} />
            <Route path="new-contact" exact element={<NewContactPage />} />
            <Route path="favorites" exact element={<FavoritesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
