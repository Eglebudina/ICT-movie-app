import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favourites, setFavourites] = useState([]);
  const [myReviews, setMyReviews] = useState( {} );
  const [playlist, setPlaylist] = useState( [] ) ;
  const [myFantasy, setMyFantasy] = useState([]);

  const addToFavourites = (movie) => {
    if (!favourites.includes(movie.id)) {
      let newFavourites = [...favourites, movie.id];
      setFavourites(newFavourites);
    }
  };

  const addToPlaylist = (movie) => {
    if (!playlist.includes(movie.id)) {
      let newPlaylist = [...playlist, movie.id];
      setPlaylist(newPlaylist);
    }
  };

  const addToFantasy = (movie) => {
    if (!myFantasy.includes(movie.id)) {
      let newFantasy = [...myFantasy, movie.id];
      setMyFantasy(newFantasy) ;
    }
  };

  const removeFromPlaylist = (movie) => {
    setPlaylist(playlist.filter((mId) => mId !== movie.id));
  };

  const removeFromFantasy = (movie) => {
    setMyFantasy(myFantasy.filter((mId) => mId !== movie.id));
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  // We will use this function in a later section
  const removeFromFavourites = (movie) => {
    setFavourites(favourites.filter((mId) => mId !== movie.id));
  };

  

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
        myFantasy,
        playlist,
        addToPlaylist,
        removeFromPlaylist,
        addToFantasy,
        removeFromFantasy
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;