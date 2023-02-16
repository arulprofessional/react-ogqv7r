import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import ContactList from "../components/contact/ContactList";
import "../style.css";

export default function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <section>
      <h1>My Favorites</h1>
      <ContactList items={favoritesCtx.favorites} />
    </section>
  );
}
