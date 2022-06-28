import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function FavoriteStory(props) {
  function handleClick() {
    props.onFavDelete(props.id);
  }

  return (
      <div className="story" style={{background: "rgb(155, 154, 161)"}}>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>
          <DeleteIcon />
        </button>
      </div>
  );
}

export default FavoriteStory;
