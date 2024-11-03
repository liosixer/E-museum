import React from 'react';
import { Box, Button, Typography, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MuiImageSlider from 'mui-image-slider';
import virtualGuide from '@/assets/avatar/virtual-guide.png'; // Placeholder for virtual guide image

const images = [
  require('@/assets/building/unit_01.jpg'),
  require('@/assets/building/unit_02.jpg'),
  require('@/assets/building/unit_03.jpg'),
];

const MuseumIntro: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/welcome');
  };

  const handleVirtualPersonClick = () => {
    console.log('触发数字人互动');
  };

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#d3d3d3',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Top Area: Return Button and Title */}
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#f0f0f0',
          padding: '10px',
          textAlign: 'center',
          borderBottom: '2px solid #666',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingX: 3,
        }}
      >
        <Button variant="contained" color="primary" onClick={handleBackClick}>
          返回首页
        </Button>
        <Typography variant="h5" sx={{ color: '#333' }}>
          大别山农耕文化博物馆
        </Typography>
        <Box sx={{ width: '100px' }} /> {/* Empty box for alignment */}
      </Box>

      {/* Content Area: ImageSlider with Floating Virtual Guide */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingY: 3,
        }}
      >
        <Box
          sx={{
            width: '100%', // Set to 70% of the screen width
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {/* ImageSlider with customized width and image stretching */}
          <MuiImageSlider
            images={images}
            sx={{
              width: '200%',
              height: '200%', // Make slider take full height of the container
              '& img': {
                width: '200%', // Make images stretch to container width
                height: 'auto', // Maintain aspect ratio
              },
            }}
          />

          {/* Floating Virtual Guide on the right side of ImageSlider */}
          <Avatar
            src={virtualGuide}
            alt="虚拟解说员"
            sx={{
              width: 150,
              height: 300,
              cursor: 'pointer',
              position: 'absolute',
              right: '-180px', // Offset to position the avatar outside the slider
              top: '50%',
              transform: 'translateY(-50%)',
            }}
            onClick={handleVirtualPersonClick}
          />
        </Box>
      </Box>

      {/* Bottom Area: Buttons for 图文展示 and 视频展示 */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          padding: '20px 0',
          backgroundColor: '#ffffff',
          borderTop: '2px solid #666',
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          sx={{
            fontWeight: 'bold',
            border: '2px solid #666',
          }}
        >
          图文展示
        </Button>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            fontWeight: 'bold',
            border: '2px solid #666',
          }}
        >
          视频展示
        </Button>
      </Box>
    </Box>
  );
};

export default MuseumIntro;
