import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';

const UpcomingMoviesPage = (props) => {
  const [movies, setMovies] = useState([]);
  
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))

  //   const addToFavourites = () => null;
  const addToFavorites = (movieId) => {
    const updatedMovies = movies.map((m) =>
      m.id === movieId ? { ...m, favorite: true } : m
    );
    setMovies(updatedMovies);
  };

  useEffect(() => {
    getUpcomingMovies().then(movies => {
      setMovies(movies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      selectFavorite={addToFavorites}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
    />
  );
};
export default UpcomingMoviesPage;