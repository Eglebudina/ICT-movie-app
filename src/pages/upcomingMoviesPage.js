import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist';
import { MoviesContext } from "../contexts/moviesContext";

const UpcomingMoviesPage = (props) => {
  const context = useContext(MoviesContext); 
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies);
  console.log("playlist as follows:")
  console.log(context.playlist);

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  //   const addToFavourites = () => null;
  const favourites = movies.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  const addToFavourites = (movieId) => true 

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      selectFavorite={addToFavourites}
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} /> 
      }}
    />
  );
};
export default UpcomingMoviesPage;