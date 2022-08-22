import React from "react";
import { useParams } from "react-router-dom";
import ActorDetails from "../components/actorDetails";
import TemplateActorBioPage from "../components/templateActorBio";
import { getActor } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const ActorsBioPage = () => {
  const { id } = useParams();
  const { data: actor, error, isLoading, isError } = useQuery(
    ["actor", { id: id }], getActor);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {actor ? (
        <>
          <TemplateActorBioPage actor={actor}>
            <ActorDetails actor={actor} />
            <Link to={`/actor/${actor.id}/movies`}>
              <Button variant="contained" size="large" color="success">
                {actor.name}'s Movies ...
              </Button>
            </Link>
          </TemplateActorBioPage>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default ActorsBioPage;