import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from '@mui/material';

const formFields = {
  genre: [
    { value: 'fantasy', label: 'Fantasy 🧙‍♂️' },
    { value: 'scifi', label: 'Science Fiction 🚀' },
    { value: 'romance', label: 'Romance 💖' },
    { value: 'mystery', label: 'Mystery 🕵️‍♀️' },
    { value: 'horror', label: 'Horror 👻' },
    { value: 'adventure', label: 'Adventure 🧭' },
    { value: 'historical', label: 'Historical ⚔️' },
    { value: 'comedy', label: 'Comedy 😂' },
    { value: 'dystopian', label: 'Dystopian 🌆' },
  ],
  characterDescription: [
    { value: 'brave_knight', label: 'A brave knight 🛡️' },
    { value: 'lost_astronaut', label: 'A lost astronaut 🧑‍🚀' },
    { value: 'mischievous_witch', label: 'A mischievous witch 🧙‍♀️' },
    { value: 'lonely_hacker', label: 'A lonely hacker 💻' },
    { value: 'rebellious_teenager', label: 'A rebellious teenager 🎸' },
    { value: 'retired_detective', label: 'A retired detective 🔍' },
    { value: 'custom', label: 'Custom' },
  ],
  setting: [
    { value: 'magical_kingdom', label: 'Magical Kingdom 🏰' },
    { value: 'futuristic_city', label: 'Futuristic City 🌃' },
    { value: 'haunted_mansion', label: 'Haunted Mansion 🏚️' },
    { value: 'distant_planet', label: 'Distant Planet 🪐' },
    { value: 'deep_jungle', label: 'Deep Jungle 🌴' },
    { value: 'medieval_village', label: 'Medieval Village 🏡' },
    { value: 'pirate_ship', label: 'Pirate Ship 🏴‍☠️' },
    { value: 'post_apocalyptic', label: 'Post-apocalyptic Earth 🌍' },
    { value: 'modern_city', label: 'Modern-day Big City 🏙️' },
  ],
  goal: [
    { value: 'find_treasure', label: 'Find a lost treasure 🗺️' },
    { value: 'save_world', label: 'Save the world 🌎' },
    { value: 'escape_danger', label: 'Escape from danger 🏃‍♂️' },
    { value: 'discover_truth', label: 'Discover a hidden truth 🧠' },
    { value: 'win_championship', label: 'Win a championship 🏆' },
    { value: 'reunite', label: 'Reunite with a loved one 💑' },
    { value: 'custom', label: 'Custom' },
  ],
  obstacle: [
    { value: 'evil_sorcerer', label: 'Evil Sorcerer 🧙‍♂️' },
    { value: 'ruthless_ai', label: 'Ruthless AI 🤖' },
    { value: 'natural_disaster', label: 'Natural disaster 🌪️' },
    { value: 'time_mistake', label: 'Time travel mistake ⏳' },
    { value: 'internal_fear', label: 'Internal fear or doubt 😨' },
    { value: 'ancient_curse', label: 'Ancient curse 🪦' },
    { value: 'corrupt_government', label: 'Corrupt government 👮‍♂️' },
    { value: 'custom', label: 'Custom' },
  ],
  tone: [
    { value: 'wholesome', label: 'Wholesome 🤗' },
    { value: 'dark', label: 'Dark 🌑' },
    { value: 'funny', label: 'Funny 🤣' },
    { value: 'serious', label: 'Serious 😐' },
    { value: 'dramatic', label: 'Dramatic 🎭' },
    { value: 'inspirational', label: 'Inspirational 🌟' },
  ],
  length: [
    { value: 'very_short', label: 'Very Short (1 paragraph) 📜' },
    { value: 'short', label: 'Short (3-4 paragraphs) ✍️' },
    { value: 'medium', label: 'Medium (5-7 paragraphs) 📖' },
    { value: 'long', label: 'Long (Full mini-story, 800+ words) 📚' },
  ],
  plotTwist: [
    { value: 'yes', label: 'Yes 🔄' },
    { value: 'no', label: 'No 🚫' },
  ],
  ending: [
    { value: 'happy', label: 'Happy Ending 🌈' },
    { value: 'sad', label: 'Sad Ending 😢' },
    { value: 'open', label: 'Open Ending 🌀' },
  ],
  specialPower: [
    { value: 'flying', label: 'Flying 🦅' },
    { value: 'invisibility', label: 'Invisibility 👻' },
    { value: 'time_control', label: 'Time Control ⏳' },
    { value: 'telepathy', label: 'Telepathy 🧠' },
    { value: 'super_strength', label: 'Super Strength 💪' },
    { value: 'none', label: 'No special power 🚫' },
    { value: 'custom', label: 'Custom' },
  ],
  sidekick: [
    { value: 'talking_animal', label: 'Talking animal 🐾' },
    { value: 'friendly_robot', label: 'Friendly robot 🤖' },
    { value: 'best_friend', label: 'Brave best friend 🧑‍🤝‍🧑' },
    { value: 'magical_creature', label: 'Magical creature 🦄' },
    { value: 'mysterious_stranger', label: 'Mysterious stranger 🕵️‍♂️' },
    { value: 'none', label: 'No sidekick 🚫' },
    { value: 'custom', label: 'Custom' },
  ],
};

function StoryForm({ onSubmit }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    genre: '',
    characterName: '',
    characterDescription: '',
    customCharacterDescription: '',
    setting: '',
    goal: '',
    customGoal: '',
    obstacle: '',
    customObstacle: '',
    tone: '',
    length: '',
    plotTwist: '',
    ending: '',
    specialPower: '',
    customSpecialPower: '',
    sidekick: '',
    customSidekick: '',
    keyword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (typeof onSubmit !== 'function') {
      console.error('onSubmit prop is not a function');
      return;
    }
    
    // Build the prompt
    const prompt = `Write a ${formData.tone} ${formData.genre} story about ${
      formData.characterName || '[Generate a cool name]'
    } described as ${
      formData.characterDescription === 'custom'
        ? formData.customCharacterDescription
        : formData.characterDescription
    } in a ${formData.setting}. The character's goal is to ${
      formData.goal === 'custom' ? formData.customGoal : formData.goal
    }, but they face ${
      formData.obstacle === 'custom' ? formData.customObstacle : formData.obstacle
    }. Story should be ${formData.length} with a ${
      formData.ending
    } ending. Include ${formData.plotTwist === 'yes' ? 'a plot twist' : 'no plot twist'} and ${
      formData.specialPower === 'custom'
        ? formData.customSpecialPower
        : formData.specialPower || 'no special power'
    } and ${
      formData.sidekick === 'custom'
        ? formData.customSidekick
        : formData.sidekick || 'no sidekick'
    }. ${formData.keyword ? `Try to naturally use the keyword "${formData.keyword}" somewhere if possible.` : ''}`;

    onSubmit({ ...formData, prompt });
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper 
        elevation={3} 
        sx={{ 
          p: 4,
          background: 'linear-gradient(145deg, #FFFFFF 0%, #FBE9D0 100%)',
          border: '1px solid rgba(144, 174, 173, 0.1)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #E64833, #244855)',
          },
          animation: 'fadeIn 0.6s ease-out',
        }}
      >
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom 
          align="center"
          sx={{
            color: '#244855',
            fontWeight: 700,
            mb: 4,
            position: 'relative',
            animation: 'slideIn 0.8s ease-out',
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '4px',
              backgroundColor: '#E64833',
              borderRadius: '2px',
            }
          }}
        >
          Create Your Story
        </Typography>
        <Box 
          component="form" 
          onSubmit={handleSubmit}
          sx={{
            '& .MuiFormControl-root': {
              animation: 'fadeIn 0.6s ease-out',
              animationFillMode: 'both',
              '&:nth-of-type(1)': { animationDelay: '0.1s' },
              '&:nth-of-type(2)': { animationDelay: '0.2s' },
              '&:nth-of-type(3)': { animationDelay: '0.3s' },
              '&:nth-of-type(4)': { animationDelay: '0.4s' },
              '&:nth-of-type(5)': { animationDelay: '0.5s' },
              '& .MuiOutlinedInput-root': {
                transition: 'all 0.3s ease',
                '&.Mui-focused fieldset': {
                  borderColor: '#244855',
                  borderWidth: '2px',
                },
                '&:hover fieldset': {
                  borderColor: '#90AEAD',
                },
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
                },
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#244855',
              },
              '& .MuiSelect-select': {
                '&:focus': {
                  backgroundColor: 'transparent',
                },
              },
            },
            '& .MuiGrid-item': {
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
              },
            },
          }}
        >
          <Grid container spacing={3}>
            {/* Genre */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Genre</InputLabel>
                <Select
                  name="genre"
                  value={formData.genre}
                  onChange={handleChange}
                  label="Genre"
                >
                  {formFields.genre.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Character Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Character Name (optional)"
                name="characterName"
                value={formData.characterName}
                onChange={handleChange}
                helperText="Leave blank for a generated name"
              />
            </Grid>

            {/* Character Description */}
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Character Description</InputLabel>
                <Select
                  name="characterDescription"
                  value={formData.characterDescription}
                  onChange={handleChange}
                  label="Character Description"
                >
                  {formFields.characterDescription.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {formData.characterDescription === 'custom' && (
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Custom Character Description"
                  name="customCharacterDescription"
                  value={formData.customCharacterDescription}
                  onChange={handleChange}
                />
              </Grid>
            )}

            {/* Setting */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Setting</InputLabel>
                <Select
                  name="setting"
                  value={formData.setting}
                  onChange={handleChange}
                  label="Setting"
                >
                  {formFields.setting.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Goal */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Goal</InputLabel>
                <Select
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
                  label="Goal"
                >
                  {formFields.goal.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {formData.goal === 'custom' && (
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Custom Goal"
                  name="customGoal"
                  value={formData.customGoal}
                  onChange={handleChange}
                />
              </Grid>
            )}

            {/* Obstacle */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Obstacle</InputLabel>
                <Select
                  name="obstacle"
                  value={formData.obstacle}
                  onChange={handleChange}
                  label="Obstacle"
                >
                  {formFields.obstacle.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {formData.obstacle === 'custom' && (
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Custom Obstacle"
                  name="customObstacle"
                  value={formData.customObstacle}
                  onChange={handleChange}
                />
              </Grid>
            )}

            {/* Tone */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Tone</InputLabel>
                <Select
                  name="tone"
                  value={formData.tone}
                  onChange={handleChange}
                  label="Tone"
                >
                  {formFields.tone.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Length */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Story Length</InputLabel>
                <Select
                  name="length"
                  value={formData.length}
                  onChange={handleChange}
                  label="Story Length"
                >
                  {formFields.length.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Plot Twist */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Plot Twist</InputLabel>
                <Select
                  name="plotTwist"
                  value={formData.plotTwist}
                  onChange={handleChange}
                  label="Plot Twist"
                >
                  {formFields.plotTwist.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Ending */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Ending</InputLabel>
                <Select
                  name="ending"
                  value={formData.ending}
                  onChange={handleChange}
                  label="Ending"
                >
                  {formFields.ending.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Special Power */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Special Power (optional)</InputLabel>
                <Select
                  name="specialPower"
                  value={formData.specialPower}
                  onChange={handleChange}
                  label="Special Power (optional)"
                >
                  {formFields.specialPower.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {formData.specialPower === 'custom' && (
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Custom Special Power"
                  name="customSpecialPower"
                  value={formData.customSpecialPower}
                  onChange={handleChange}
                />
              </Grid>
            )}

            {/* Sidekick */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Sidekick (optional)</InputLabel>
                <Select
                  name="sidekick"
                  value={formData.sidekick}
                  onChange={handleChange}
                  label="Sidekick (optional)"
                >
                  {formFields.sidekick.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {formData.sidekick === 'custom' && (
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Custom Sidekick"
                  name="customSidekick"
                  value={formData.customSidekick}
                  onChange={handleChange}
                />
              </Grid>
            )}

            {/* Keyword */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Keyword (optional)"
                name="keyword"
                value={formData.keyword}
                onChange={handleChange}
                helperText="e.g., 'Phoenix', 'Broken clock', 'Forgotten library'"
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                sx={{ 
                  mt: 4,
                  background: 'linear-gradient(45deg, #244855 30%, #90AEAD 90%)',
                  color: 'white',
                  fontSize: '1.1rem',
                  py: 1.5,
                  position: 'relative',
                  overflow: 'hidden',
                  animation: 'fadeIn 0.8s ease-out',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #1A353F 30%, #7A9291 90%)',
                    transform: 'translateY(-2px)',
                    '&::after': {
                      transform: 'translateX(100%)',
                    },
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                    transform: 'translateX(-100%)',
                    transition: 'transform 0.6s ease',
                  },
                  '&:active': {
                    transform: 'translateY(1px)',
                  },
                }}
              >
                ✨ Generate Your Story ✨
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}

export default StoryForm; 