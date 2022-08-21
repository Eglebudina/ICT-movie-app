import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromPlaylistIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromPlaylist = (e) => {
    e.preventDefault();
    context.removeFromPlaylist(movie);
  };
  return (
    <IconButton
      aria-label="remove from Playlist"
      onClick={handleRemoveFromPlaylist}
    >
      <DeleteIcon style={{backgroundColor:'#E9DB1E', color: 'black'}} fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromPlaylistIcon;