import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Scenes } from '../App';
import { getTriggerPosition } from '../utils/constants';
import { isDebug } from '../utils/debug';


interface TileProps {
  shouldShowTile: boolean;
  xPos: number;
  yPos: number;
}
const Tile = styled.div<TileProps>`
  height: 150px;
  width: 150px;
  ${({shouldShowTile}) => shouldShowTile && 'border: 2px solid teal;'}
  position: absolute;
  left: ${({xPos}) => xPos}px;
  top: ${({yPos}) => yPos}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export interface InteracionTileProps {
  emitInteraction: () => void;
  scene: Scenes;
}

export function InteracionTile({emitInteraction, scene}: InteracionTileProps) {
  const shouldShowTile = isDebug();
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        emitInteraction();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);

    }
  });

  const {xPos, yPos} = getTriggerPosition(scene);
  return (
    <Tile 
      shouldShowTile={shouldShowTile}
      xPos={xPos}
      yPos={yPos}
      onMouseEnter={emitInteraction}
      onClick={emitInteraction}>
    </Tile>
  );
}
