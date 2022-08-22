import React from "react";
import Typography from "@material-ui/core/Typography";

const ActorDetails = (actor) => {

  return (
    <>
      <Typography variant="h5" component="h3">
        Biography
      </Typography>

      <Typography variant="h6" component="p">
        {actor.biography}
      </Typography>
    </>
  );
};
export default ActorDetails;