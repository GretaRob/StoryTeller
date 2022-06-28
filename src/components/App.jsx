import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Story from "./Story";
import FavoriteStory from "./FavoriteStory";
import StoryCreator from "./StoryCreator";
import SubHeader from "./SubHeader";

function App() {
  const [stories, setStories] = useState([]);
  const [favorites, setFavorites] = useState([]);

  function addStory(newStory) {
    setStories(prevStories => {
      return [...prevStories, newStory];
    });

  }

  function deleteStory(id) {
    setStories(prevStories => {
      return prevStories.filter((storyItem, index) => {
        return index !== id;
      });
    });
  }

  function addFavorite(newFavorite) {
    setFavorites((prevFavorites) => {
      return [...prevFavorites, newFavorite];
    });
  }

  function deleteFavorite(id) {
    setFavorites(prevFavorites => {
      return prevFavorites.filter((favoriteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <StoryCreator onAdd={addStory} />
      <SubHeader />
      <div className="content">
        <div className="column">
          {stories.map((storyItem, index) => {
            return (
              <Story
                key={index}
                id={index}
                title={storyItem.title}
                content={storyItem.content}
                onAddFavorite={addFavorite}
                onDelete={deleteStory}
              />
            );
          })}
        </div>
        <div className='column'>
          {favorites.map((favoriteItem, index) => {
            console.log(favorites)
            return (
              <FavoriteStory
                key={index}
                id={index}
                title={favoriteItem.title}
                content={favoriteItem.content}
                onFavDelete={deleteFavorite}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
