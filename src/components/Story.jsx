import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from '@mui/icons-material/Favorite';

function Story(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  function handleFavClick() {
    props.onAddFavorite(props);
  }

  return (
      <div className="story">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>
          <DeleteIcon />
        </button>
        <button onClick={handleFavClick}>
          <FavoriteIcon />
        </button>
      </div>
  );
}

export default Story;
