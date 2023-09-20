import React from "react";
import { useContext } from "react";
import FavoriteContext from "../store/favorites-context";
import { MeetupList } from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favoriteCtx = useContext(FavoriteContext);
  return (
    <section>
      <h1>My Favorites</h1>
      <MeetupList meetups={favoriteCtx.favorites} />
    </section>
  );
}
export default FavoritesPage;
