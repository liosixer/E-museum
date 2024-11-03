import React, { useState } from 'react';
import { Box, Button, Typography, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MuiImageSlider from 'mui-image-slider';
import museumBackground from '@/assets/background/museum.jpg'; // 背景图片
import virtualGuide from '@/assets/avatar/virtual-guide.png'; // 虚拟解说员图片
import { styled } from '@mui/system';

const images = [
  require('@/assets/building/unit_01.jpg'),
  require('@/assets/building/unit_02.jpg'),
  require('@/assets/building/unit_03.jpg'),
];

// 定制化导航按钮
const StyledImageSliderContainer = styled(Box)( {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '70%',
  height: '400px', // You can adjust the height based on your design
});

const SliderButton = styled(Button)( {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
  minWidth: '50px',
  minHeight: '50px',
  fontSize: '1.5rem',
  zIndex: 1,
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
});

const BuildingUnit: React.FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const handleVirtualGuideClick = () => {
    console.log('触发虚拟解说员互动');
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        backgroundImage: `url(${museumBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* 顶部区域：返回首页和标题 */}
      <Box
        sx={{
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '10px',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingX: 3,
          borderBottom: '2px solid #666',
        }}
      >
        <Button variant="contained" color="primary" onClick={() => handleNavigation('/')}>
          返回首页
        </Button>
        <Typography variant="h5" sx={{ color: '#333' }}>
          大别山农耕文化博物馆
        </Typography>
        <Box sx={{ width: '100px' }} />
      </Box>

      {/* 内容区域：图像轮播和虚拟解说员 */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingY: 3,
        }}
      >
        <StyledImageSliderContainer>
          <SliderButton sx={{ left: '-50px' }} onClick={handlePrevClick}>&lt;</SliderButton>
          <MuiImageSlider
            images={images}
            currentIndex={currentIndex}
            onChange={setCurrentIndex} // 使用 setCurrentIndex 处理索引变化
            infinite={false}
            showBullets={false}
            showNavButtons={false}
            sx={{
              width: '200%',
              height: '100%', // Ensures the slider takes full height
              '& img': {
                width: '100%',
                height: '100%', // Ensure images cover the slider area
                objectFit: 'cover', // Ensure images cover the area without distortion
              },
            }}
          />
          <SliderButton sx={{ right: '-50px' }} onClick={handleNextClick}>&gt;</SliderButton>
          {/* 虚拟解说员浮动在 ImageSlider 右侧 */}
          <Avatar
            src={virtualGuide}
            alt="虚拟解说员"
            sx={{
              width: 150,
              height: 300,
              cursor: 'pointer',
              position: 'absolute',
              right: '-170px', // Adjust as needed
              top: '50%',
              transform: 'translateY(-50%)',
            }}
            onClick={handleVirtualGuideClick}
          />
        </StyledImageSliderContainer>
      </Box>

      {/* 底部区域：图文展示和视频展示按钮 */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          padding: '20px 0',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
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
        <Button
          variant="contained"
          color="secondary"
          sx={{
            fontWeight: 'bold',
            border: '2px solid #666',
          }}
        >
          互动展示
        </Button>
      </Box>
    </Box>
  );
};

export default BuildingUnit;
