import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  AppBar,
  Toolbar,
  IconButton,
  Link,
  Divider,
} from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CreateIcon from '@mui/icons-material/Create';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PsychologyIcon from '@mui/icons-material/Psychology';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function LandingPage() {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Header */}
      <AppBar position="fixed" elevation={0} sx={{ background: 'transparent', backdropFilter: 'blur(8px)' }}>
        <Toolbar>
          <AutoStoriesIcon sx={{ mr: 2, color: '#FBE9D0' }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#FBE9D0' }}>
            StoryBuilder
          </Typography>
          <Button color="inherit" onClick={() => navigate('/login')} sx={{ color: '#FBE9D0' }}>
            Login
          </Button>
          <Button 
            variant="contained" 
            onClick={() => navigate('/signup')}
            sx={{
              ml: 2,
              background: 'linear-gradient(45deg, #E64833 30%, #FF6B4A 90%)',
            }}
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #244855 0%, #1A353F 100%)',
          overflow: 'hidden',
          pt: 8,
        }}
      >
        {/* Animated Background Elements */}
        {[...Array(5)].map((_, i) => (
          <Box
            key={i}
            sx={{
              position: 'absolute',
              width: '20vw',
              height: '20vw',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, rgba(144, 174, 173, 0.1), rgba(230, 72, 51, 0.1))',
              transform: `translate(${Math.sin(scrollY * 0.002 + i) * 10}px, ${Math.cos(scrollY * 0.002 + i) * 10}px)`,
              transition: 'transform 0.3s ease',
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
              filter: 'blur(50px)',
              opacity: 0.5,
              zIndex: 1,
            }}
          />
        ))}

        {/* Main Content */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ transform: `translateY(${scrollY * 0.2}px)` }}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    fontWeight: 700,
                    color: '#FBE9D0',
                    mb: 2,
                    animation: 'slideIn 0.8s ease-out',
                  }}
                >
                  StoryBuilder
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: '#90AEAD',
                    mb: 2,
                    animation: 'fadeIn 1s ease-out',
                    animationDelay: '0.2s',
                  }}
                >
                  Your Imagination, Our Creation
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#FBE9D0',
                    mb: 4,
                    fontSize: '1.2rem',
                    opacity: 0.8,
                    maxWidth: '600px',
                  }}
                >
                  Transform your ideas into captivating stories with our AI-powered story generation platform. Perfect for writers, educators, and creative minds.
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/signup')}
                  sx={{
                    background: 'linear-gradient(45deg, #E64833 30%, #FF6B4A 90%)',
                    px: 4,
                    py: 2,
                    animation: 'fadeIn 1s ease-out',
                    animationDelay: '0.4s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 6px 20px rgba(230, 72, 51, 0.3)',
                    },
                  }}
                >
                  Get Started Free
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  transform: `translateY(${-scrollY * 0.1}px)`,
                  animation: 'fadeIn 1s ease-out',
                  animationDelay: '0.6s',
                }}
              >
                <AutoStoriesIcon
                  sx={{
                    fontSize: '20rem',
                    color: 'rgba(251, 233, 208, 0.1)',
                    position: 'absolute',
                    right: '-20%',
                    top: '-50%',
                    transform: `rotate(${scrollY * 0.05}deg)`,
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 12, background: '#FBE9D0' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{
              color: '#244855',
              mb: 8,
              fontWeight: 600,
              transform: `translateY(${(scrollY - 500) * 0.1}px)`,
            }}
          >
            Create Stories Like Never Before
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                icon: <CreateIcon sx={{ fontSize: 40 }} />,
                title: 'Intuitive Creation',
                description: 'Easy-to-use interface for crafting your perfect story with customizable prompts and settings.',
              },
              {
                icon: <CloudQueueIcon sx={{ fontSize: 40 }} />,
                title: 'AI-Powered',
                description: 'Advanced AI technology brings your ideas to life with creative and engaging narratives.',
              },
              {
                icon: <BookmarkIcon sx={{ fontSize: 40 }} />,
                title: 'Save & Share',
                description: 'Store your stories in your personal library and share them with friends and followers.',
              },
            ].map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    transform: `translateY(${(scrollY - 600) * 0.05}px)`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        color: '#E64833',
                        mb: 2,
                        transform: `rotate(${scrollY * 0.02}deg)`,
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{ color: '#244855', mb: 2, fontWeight: 600 }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#874F41' }}>
                      {feature.description}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* How It Works Section */}
      <Box sx={{ py: 12, background: '#FFFFFF' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{
              color: '#244855',
              mb: 8,
              fontWeight: 600,
            }}
          >
            How It Works
          </Typography>
          <Grid container spacing={6}>
            {[
              {
                icon: <CreateIcon sx={{ fontSize: 48 }} />,
                title: '1. Choose Your Story Type',
                description: 'Select from various genres and styles to begin your creative journey.',
              },
              {
                icon: <PsychologyIcon sx={{ fontSize: 48 }} />,
                title: '2. Customize Your Prompt',
                description: 'Add your unique ideas and preferences to guide the story generation.',
              },
              {
                icon: <RocketLaunchIcon sx={{ fontSize: 48 }} />,
                title: '3. Generate & Edit',
                description: 'Let AI create your story and make adjustments to perfect it.',
              },
            ].map((step, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box
                  sx={{
                    textAlign: 'center',
                    transform: `translateY(${(scrollY - 800) * 0.05}px)`,
                  }}
                >
                  <Box
                    sx={{
                      color: '#E64833',
                      mb: 2,
                      display: 'inline-block',
                    }}
                  >
                    {step.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{ color: '#244855', mb: 2, fontWeight: 600 }}
                  >
                    {step.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#874F41' }}>
                    {step.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 12,
          background: 'linear-gradient(135deg, #244855 0%, #1A353F 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              textAlign: 'center',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: '#FBE9D0',
                mb: 3,
                fontWeight: 600,
              }}
            >
              Ready to Start Your Story?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#90AEAD',
                mb: 4,
                fontSize: '1.2rem',
              }}
            >
              Join thousands of creators who are bringing their stories to life with StoryBuilder.
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/signup')}
              sx={{
                background: 'linear-gradient(45deg, #E64833 30%, #FF6B4A 90%)',
                px: 6,
                py: 2,
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 6px 20px rgba(230, 72, 51, 0.3)',
                },
              }}
            >
              Start Creating Now
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ py: 8, background: '#1A353F' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ color: '#FBE9D0', mb: 2 }}>
                  StoryBuilder
                </Typography>
                <Typography variant="body2" sx={{ color: '#90AEAD' }}>
                  Empowering creativity through AI-assisted storytelling.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ color: '#FBE9D0', mb: 2 }}>
                Quick Links
              </Typography>
              <Link href="/login" sx={{ color: '#90AEAD', display: 'block', mb: 1 }}>
                Login
              </Link>
              <Link href="/signup" sx={{ color: '#90AEAD', display: 'block', mb: 1 }}>
                Sign Up
              </Link>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ color: '#FBE9D0', mb: 2 }}>
                Connect With Us
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton sx={{ color: '#90AEAD' }}>
                  <GitHubIcon />
                </IconButton>
                <IconButton sx={{ color: '#90AEAD' }}>
                  <LinkedInIcon />
                </IconButton>
                <IconButton sx={{ color: '#90AEAD' }}>
                  <TwitterIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ my: 4, borderColor: 'rgba(144, 174, 173, 0.1)' }} />
          <Typography variant="body2" align="center" sx={{ color: '#90AEAD' }}>
            © {new Date().getFullYear()} StoryBuilder. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default LandingPage; 