import React from "react";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import {getActorsMovies} from '../api/tmdb-api';
import { useParams } from "react-router-dom";

import ActorDetails from "../components/actorDetails";


const ActorsMovieDetails = () => {
    const { id } = useParams();
    const { data: person, actor,error, isLoading,isError,} = useQuery(
      ["person", { id: id }], getActorsMovies);
  
    if (isLoading) {
      return <Spinner />;
    }
  
    if (isError) {
      return <h1>{error.message}</h1>;
    }
  
    return (
      <>
        {person ? (
          <>
            <ActorDetails actor={person}>
              <ActorDetails actor={actor} />
            </ActorDetails>
          </>
        ) : (
          <p>Waiting for ... details</p>
        )}
      </>
    );
  };
  
  export default ActorsMovieDetails;