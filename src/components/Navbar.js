import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Container,
} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

function Navbar() {
  const navigate = useNavigate();
  const { signOut, user } = useAuth();

  const handleSignOut = async () => {
    try {
      const { error } = await signOut();
      if (error) throw error;
      toast.success('Signed out successfully');
      navigate('/login');
    } catch (error) {
      toast.error('Error signing out: ' + error.message);
    }
  };

  if (!user) return null;

  return (
    <AppBar 
      position="static" 
      elevation={0}
      sx={{
        backgroundColor: 'transparent',
        backdropFilter: 'blur(10px)',
        background: 'linear-gradient(90deg, rgba(36,72,85,0.95) 0%, rgba(26,53,63,0.95) 100%)',
        borderBottom: '1px solid rgba(144, 174, 173, 0.1)',
        animation: 'fadeIn 0.5s ease-out',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar 
          sx={{ 
            px: { xs: 0 },
            '& > *': {
              animation: 'slideIn 0.5s ease-out',
              animationFillMode: 'both',
            },
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ 
              mr: 2,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(144, 174, 173, 0.1)',
                transform: 'rotate(180deg)',
              },
            }}
            onClick={() => navigate('/create-story')}
          >
            <MenuBookIcon />
          </IconButton>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1,
              fontWeight: 600,
              background: 'linear-gradient(45deg, #FBE9D0 30%, #FFFFFF 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-2px',
                left: 0,
                width: '0',
                height: '2px',
                background: 'linear-gradient(90deg, #E64833, transparent)',
                transition: 'width 0.3s ease',
              },
              '&:hover::after': {
                width: '100px',
              },
            }}
          >
            Story Creator
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button 
              color="inherit" 
              onClick={() => navigate('/my-stories')}
              sx={{
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  backgroundColor: 'rgba(144, 174, 173, 0.1)',
                  transform: 'translateY(-2px)',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '2px',
                  background: 'linear-gradient(90deg, #E64833, transparent)',
                  transform: 'translateX(-100%)',
                  transition: 'transform 0.3s ease',
                },
                '&:hover::after': {
                  transform: 'translateX(0)',
                },
              }}
            >
              My Stories
            </Button>
            <Button 
              color="inherit"
              onClick={() => navigate('/create-story')}
              sx={{
                backgroundColor: 'rgba(230, 72, 51, 0.1)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  backgroundColor: 'rgba(230, 72, 51, 0.2)',
                  transform: 'translateY(-2px)',
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                  transform: 'translateX(-100%)',
                  transition: 'transform 0.6s ease',
                },
                '&:hover::before': {
                  transform: 'translateX(100%)',
                },
              }}
            >
              Create Story
            </Button>
            <IconButton
              color="inherit"
              onClick={handleSignOut}
              sx={{
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(144, 174, 173, 0.1)',
                  transform: 'rotate(180deg)',
                },
              }}
            >
              <LogoutIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar; 