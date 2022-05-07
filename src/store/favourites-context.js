import { createContext, useState } from "react";

// Create Context with initial values
const FavouritesContext = createContext({
  favourites: [],
  nbFavourites: 0,
  addFavourite: (newFavourite) => {},
  removeFavourite: (favouriteID) => {},
  isItemFavourite: (favouriteID) => {}
});

// Update Context Value and Provide it to all other components that are dependant
export function FavouriteContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([]);

  function addFavouriteHandler(newFavourite) {
    setUserFavourites((prevUserFavourites) => {
        return prevUserFavourites.concat(newFavourite)
    });
  }
  
  function removeFavouriteHandler(favouriteID) {
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.filter((meetup) => meetup._id.toString() !== favouriteID)
    })
  }

  function isItemFavouriteHandler(favouriteID) {
    return userFavourites.some((meetup) => meetup._id.toString() === favouriteID) // Some item matches condition
  }

  let context = {
    favourites: userFavourites,
    nbFavourites: userFavourites.length,
    addFavourite: addFavouriteHandler, // Expose Pointer to functions to all interested components
    removeFavourite: removeFavouriteHandler,
    isItemFavourite: isItemFavouriteHandler
  };

  // When we wrap FavouriteContextProvider component around an object we pass the wrapped components as props.
  // Now we say here that we actually simply return not the FavouriteContextProvider but a special React built in Provider.
  // Why pass a value to context? We basically have to provide the Provider with the current data. This Provider than
  // handles the rest to make it available to all other components who are wrapped.
  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContext;