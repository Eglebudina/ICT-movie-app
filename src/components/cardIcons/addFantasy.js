import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import MovieIcon from '@material-ui/icons//Movie';

const AddFantasyIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToFantasy = (e) => {
    e.preventDefault();
    context.addToFantasy(movie);
  };
  return (
    <IconButton aria-label="add to fantasy" onClick={handleAddToFantasy}>
      <MovieIcon style={{ color:"gold" , background: "purple" }} fontSize="large" />
    </IconButton>
  );
};

export default AddFantasyIcon;