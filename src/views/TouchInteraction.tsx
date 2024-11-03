import React, { ReactElement, useState } from "react";
import { Button, Card } from "@mui/material";

const TouchInteraction: React.FC = (): ReactElement => {
  const [interactionState, setInteractionState] = useState({
    scale: 1,
    position: { x: 0, y: 0 },
  });

  const handleZoomIn = () =>
    setInteractionState({
      ...interactionState,
      scale: interactionState.scale + 0.1,
    });
  const handleZoomOut = () =>
    setInteractionState({
      ...interactionState,
      scale: interactionState.scale - 0.1,
    });

  return (
    <Card>
      <div style={{ transform: `scale(${interactionState.scale})` }}>
        <p>互动内容显示</p>
      </div>
      <Button onClick={handleZoomIn}>放大</Button>
      <Button onClick={handleZoomOut}>缩小</Button>
    </Card>
  ) as ReactElement;
};

export default TouchInteraction;