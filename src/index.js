import React from "react";
import SiteHeader from './components/siteHeader';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import SimilarMoviesPage from "./pages/similarMoviesPage";
import PopularMoviesPage from "./pages/popularMoviesPage";
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import PlaylistMoviePage from "./pages/playlistMoviePage";
import ActorPage from "./pages/actorsPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <Routes>
            <Route path="/reviews/:id" element={<MovieReviewPage/>} />
            <Route path="/movies/:id/similar" element={<SimilarMoviesPage/>} />
            <Route path="/movies/upcoming" element={<UpcomingMoviesPage/>} />
            <Route path="/movies/favourites" element={<FavouriteMoviesPage/>} />
            <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
            <Route path="/movies/:id" element={<MoviePage/>} />
            <Route path="/movies/toprated" element={<TopRatedMoviesPage/>} />
            <Route path="/movies/popular" element={<PopularMoviesPage/>} />
            <Route path="/movies/playlist" element={<PlaylistMoviePage/>} />
            <Route path="/actors" element={<ActorPage/>} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes> 
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};


ReactDOM.render(<App />, document.getElementById("root"));