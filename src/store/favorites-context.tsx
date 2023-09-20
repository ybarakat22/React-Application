import { createContext, useState } from "react";

const FavoriteContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup: any) => {},
  removeFavorite: (meetupId: any) => {},
  itemIsFavorite: (meetupId: any): boolean => {
    return true;
  },
});

export function FavoriteContextProvider(props: any) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup: any) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }
  function removeFavoriteHandler(meetupId: any) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup: any) => meetup.id !== meetupId);
    });
  }
  function itemIsFavoriteHandler(meetupId: any): boolean {
    return userFavorites.some((meetup: any) => meetup.id == meetupId);
  }
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
}
export default FavoriteContext;
