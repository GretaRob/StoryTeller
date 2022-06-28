import React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FilterListIcon from '@mui/icons-material/FilterList';

function SubHeader() {
  return (
    <div className="subHeader">
      <h1>
        <FilterListIcon />
         All Stories
      </h1>
      <h1>
        <FavoriteIcon />
          Favorite Stories
      </h1>
    </div>
  );
}

export default SubHeader;
