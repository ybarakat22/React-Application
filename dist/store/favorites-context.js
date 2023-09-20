"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteContextProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const FavoriteContext = (0, react_1.createContext)({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => { },
    removeFavorite: (meetupId) => { },
    itemIsFavorite: (meetupId) => {
        return true;
    },
});
function FavoriteContextProvider(props) {
    const [userFavorites, setUserFavorites] = (0, react_1.useState)([]);
    function addFavoriteHandler(favoriteMeetup) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }
    function removeFavoriteHandler(meetupId) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
        });
    }
    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some((meetup) => meetup.id == meetupId);
    }
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,
    };
    return ((0, jsx_runtime_1.jsx)(FavoriteContext.Provider, Object.assign({ value: context }, { children: props.children }), void 0));
}
exports.FavoriteContextProvider = FavoriteContextProvider;
exports.default = FavoriteContext;
