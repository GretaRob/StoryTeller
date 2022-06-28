import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

function StoryCreator(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [story, setStory] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setStory(prevStory => {
      return {
        ...prevStory,
        [name]: value
      };
    });
  }

  function submitStory(event) {
    props.onAdd(story);
    setStory({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-story">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={story.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={story.content}
          placeholder="Create a story..."
          rows={isExpanded ? 3 : 1}
        />
        <button>
        <AddIcon onClick={submitStory}/>
        </button>
      </form>
    </div>
  );
}

export default StoryCreator;
