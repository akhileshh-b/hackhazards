import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Container,
  Paper,
  Typography,
  Box,
  Button,
  CircularProgress,
  Divider,
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import CreateIcon from '@mui/icons-material/Create';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../supabaseClient';
import toast from 'react-hot-toast';

function StoryResult() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const [story, setStory] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [storyId, setStoryId] = useState(null);

  const generateStory = async (prompt) => {
    try {
      console.log('Generating story with prompt:', prompt);
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer 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`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "system",
              content: "You are a creative story writer who creates engaging and imaginative stories based on user prompts."
            },
            {
              role: "user",
              content: prompt
            }
          ],
          temperature: 1.2,
          max_tokens: 1000,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`API Error: ${errorData.error?.message || 'Failed to generate response'}`);
      }

      const data = await response.json();
      console.log('API Response:', data);
      return data.choices[0].message.content;
    } catch (err) {
      console.error('Error in generateStory:', err);
      throw new Error(`Error: ${err.message}`);
    }
  };

  useEffect(() => {
    const initializeStory = async () => {
      if (!location.state?.storyData) {
        console.log('No story data found, redirecting to create-story');
        navigate('/create-story');
        return;
      }

      try {
        const storyResponse = await generateStory(location.state.storyData.prompt);
        setStory(storyResponse);
        
        // Save the story to Supabase
        const { data, error } = await supabase
          .from('user_stories')
          .insert([
            {
              user_id: user.id,
              title: `Story - ${new Date().toLocaleDateString()}`,
              story_content: storyResponse,
              prompt: location.state.storyData.prompt,
              form_data: location.state.storyData
            }
          ])
          .select()
          .single();

        if (error) throw error;
        setStoryId(data.id);
        setLoading(false);
        toast.success('Story generated successfully!');
      } catch (err) {
        console.error('Error generating story:', err);
        setError(err.message);
        setLoading(false);
        toast.error(`Error generating story: ${err.message}`);
      }
    };

    initializeStory();
  }, [location.state, navigate, user.id]);

  const handleSave = async () => {
    try {
      setSaving(true);
      const { error } = await supabase
        .from('user_stories')
        .update({
          story_content: story
        })
        .eq('id', storyId);

      if (error) throw error;
      toast.success('Story saved successfully!');
    } catch (err) {
      toast.error('Error saving story: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleCreateNew = () => {
    navigate('/create-story');
  };

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <CircularProgress size={60} />
          <Typography variant="h6" sx={{ mt: 2 }}>
            Crafting your story...
          </Typography>
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h6" color="error" gutterBottom>
            Error generating story: {error}
          </Typography>
          <Button variant="contained" onClick={handleCreateNew}>
            Try Again
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h4" component="h1">
            Your Story
          </Typography>
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? 'Saving...' : 'Save Story'}
          </Button>
        </Box>
        
        <Box sx={{ my: 4 }}>
          <Typography variant="body1" sx={{ 
            whiteSpace: 'pre-wrap',
            lineHeight: 1.8,
            fontSize: '1.1rem'
          }}>
            {story}
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button
            variant="contained"
            onClick={handleCreateNew}
            size="large"
            startIcon={<CreateIcon />}
          >
            Create New Story
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigate('/my-stories')}
            size="large"
          >
            View All Stories
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default StoryResult; 