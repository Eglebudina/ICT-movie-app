import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getMovies90s } from "../api/tmdb-api";

import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist';


const MoviesByYearPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('discover', getMovies90s)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  //const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title="Movies of before 90's"
      movies={movies}
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} />
      }}
    />    
  );
};

export default MoviesByYearPage;