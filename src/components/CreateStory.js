import React from 'react';
import { useNavigate } from 'react-router-dom';
import StoryForm from './StoryForm';

function CreateStory() {
  const navigate = useNavigate();

  const handleSubmit = (storyData) => {
    if (!storyData) {
      console.error('No story data provided');
      return;
    }
    console.log('Submitting story data:', storyData);
    navigate('/story-result', { state: { storyData } });
  };

  return <StoryForm onSubmit={handleSubmit} />;
}

export default CreateStory; 