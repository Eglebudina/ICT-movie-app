import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd"

const AddToPlaylistIcon = ({ movie }) => {
  const context = useContext(MoviesContext);
  const handleAddToPlaylist = (e) => {
    e.preventDefault();
    context.addToPlaylist(movie);
    //console.log("in handleAddToPlaylist");
    //console.log(context.playlist) 
  };

  return (
    <IconButton aria-label="add to playlist" onClick={handleAddToPlaylist}>
      <PlaylistAddIcon color="secondary" fontSize="large" />
    </IconButton>
  );
};

export default AddToPlaylistIcon;