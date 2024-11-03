import React from 'react';
import { Box, Button, Typography, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import museumBackground from '@/assets/background/museum.jpg';
import virtualGuide from '@/assets/avatar/virtual-guide.png'; // Import the image directly

const WelcomeScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    console.log('Navigating to:', path);
    navigate(path);
  };

  const handleVirtualGuideClick = () => {
    console.log('触发虚拟解说员互动');
  };

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#d3d3d3',
        backgroundImage: `url(${museumBackground})`,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundPosition: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Top Title */}
      <Box
        sx={{
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '20px 0',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" sx={{ color: '#b22222' }}>
          大别山农耕文化博物馆
        </Typography>
      </Box>

      {/* Main Content Area */}
      <Box
        sx={{
          width: '80%',
          flex: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 3,
        }}
      >
        {/* Left Button Area */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            alignItems: 'flex-start',
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleNavigation('/intro')}
          >
            博物馆介绍
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleNavigation('/building')}
          >
            建筑单元
          </Button>
        </Box>

        {/* Right Side: Virtual Guide */}
        <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <Avatar
            src={virtualGuide}
            alt="虚拟解说员"
            sx={{
              objectFit: 'contain',
              width: '200%',
              height: 'auto',
              maxWidth: '200%',  // Ensures it doesn’t exceed container width
              maxHeight: '200%'  // Ensures it doesn’t exceed container height
            }}
            onClick={handleVirtualGuideClick}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default WelcomeScreen;
