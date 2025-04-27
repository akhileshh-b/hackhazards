import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import { useAuth } from './contexts/AuthContext';
import Login from './components/Login';
import SignUp from './components/SignUp';
import CreateStory from './components/CreateStory';
import StoryResult from './components/StoryResult';
import StoriesList from './components/StoriesList';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';

// Animation keyframes
const fadeIn = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const slideIn = `
  @keyframes slideIn {
    from { transform: translateX(-20px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
`;

const pulse = `
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#244855',
      light: '#90AEAD',
      dark: '#1A353F',
    },
    secondary: {
      main: '#E64833',
      light: '#FF6B4A',
      dark: '#C93A28',
    },
    background: {
      default: '#FBE9D0',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#244855',
      secondary: '#874F41',
    },
    error: {
      main: '#E64833',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      color: '#244855',
      fontWeight: 600,
    },
    h2: {
      color: '#244855',
      fontWeight: 600,
    },
    h3: {
      color: '#244855',
      fontWeight: 600,
    },
    h4: {
      color: '#244855',
      fontWeight: 600,
    },
    h5: {
      color: '#244855',
      fontWeight: 600,
    },
    h6: {
      color: '#244855',
      fontWeight: 600,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        ${fadeIn}
        ${slideIn}
        ${pulse}
      `,
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          animation: 'fadeIn 0.5s ease-out',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '1rem',
          padding: '10px 24px',
          boxShadow: 'none',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            transform: 'translateY(-2px)',
          },
          '&:active': {
            transform: 'translateY(1px)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(45deg, #244855 30%, #90AEAD 90%)',
          '&:hover': {
            background: 'linear-gradient(45deg, #1A353F 30%, #7A9291 90%)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(45deg, #E64833 30%, #FF6B4A 90%)',
          '&:hover': {
            background: 'linear-gradient(45deg, #C93A28 30%, #E64833 90%)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#244855',
          backdropFilter: 'blur(8px)',
          background: 'linear-gradient(90deg, #244855 0%, #1A353F 100%)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-1px)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            },
            '&.Mui-focused': {
              transform: 'translateY(-1px)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
          },
        },
      },
    },
  },
});

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  
  if (loading) {
    return null;
  }
  
  return user ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route 
              path="/create-story" 
              element={
                <PrivateRoute>
                  <Navbar />
                  <CreateStory />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/story-result" 
              element={
                <PrivateRoute>
                  <Navbar />
                  <StoryResult />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/my-stories" 
              element={
                <PrivateRoute>
                  <Navbar />
                  <StoriesList />
                </PrivateRoute>
              } 
            />
          </Routes>
        </Router>
        <Toaster 
          position="top-center"
          toastOptions={{
            style: {
              background: '#244855',
              color: '#FFFFFF',
              borderRadius: '8px',
              padding: '16px 24px',
            },
            success: {
              style: {
                background: '#90AEAD',
              },
            },
            error: {
              style: {
                background: '#E64833',
              },
            },
          }}
        />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App; 