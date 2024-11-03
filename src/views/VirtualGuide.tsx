import React from 'react';
import { Avatar, Typography, Button } from '@mui/material';

const VirtualGuide: React.FC<{ text: string }> = ({ text }) => {
  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <Avatar alt="虚拟解说员" src="/assets/guide-avatar.png" />
      <Typography>{text}</Typography>
      <Button onClick={speak}>解说员开始解说</Button>
    </div>
  );
};

export default VirtualGuide;
