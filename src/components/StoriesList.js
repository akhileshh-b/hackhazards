import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  Typography,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  CircularProgress,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../supabaseClient';
import toast from 'react-hot-toast';

function StoriesList() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStories();
  }, [user]);

  const fetchStories = async () => {
    try {
      const { data, error } = await supabase
        .from('user_stories')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setStories(data);
    } catch (error) {
      toast.error('Error fetching stories: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase
        .from('user_stories')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setStories(stories.filter(story => story.id !== id));
      toast.success('Story deleted successfully');
    } catch (error) {
      toast.error('Error deleting story: ' + error.message);
    }
  };

  const handleEdit = (story) => {
    // Navigate to story form with existing story data
    navigate('/create-story', { state: { story } });
  };

  const handleCreateNew = () => {
    navigate('/create-story');
  };

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h4" component="h1">
            My Stories
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleCreateNew}
          >
            Create New Story
          </Button>
        </Box>

        {stories.length === 0 ? (
          <Typography variant="body1" textAlign="center" py={4}>
            You haven't created any stories yet. Start creating one now!
          </Typography>
        ) : (
          <List>
            {stories.map((story, index) => (
              <React.Fragment key={story.id}>
                {index > 0 && <Divider />}
                <ListItem
                  secondaryAction={
                    <Box>
                      <IconButton edge="end" onClick={() => handleEdit(story)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton edge="end" onClick={() => handleDelete(story.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  }
                >
                  <ListItemText
                    primary={story.title || 'Untitled Story'}
                    secondary={
                      <>
                        <Typography component="span" variant="body2" color="text.primary">
                          {new Date(story.created_at).toLocaleDateString()}
                        </Typography>
                        {' — '}
                        {story.story_content.substring(0, 100)}...
                      </>
                    }
                  />
                </ListItem>
              </React.Fragment>
            ))}
          </List>
        )}
      </Paper>
    </Container>
  );
}

export default StoriesList; 