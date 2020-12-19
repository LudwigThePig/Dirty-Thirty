import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Scenes } from '../App';
import { getPosition } from '../utils/constants';
import { isDebug } from '../utils/debug';


interface ContainerProps {
  shouldShowTile: boolean;
  xPos: number;
  yPos: number;
}
const Container = styled.div<ContainerProps>`
  height: 50px;
  width: 200px;
  ${({shouldShowTile}) => shouldShowTile ? 
  ` 
    background: black;
    color: white;` : 
  `
    color: transparent;
    border: 2px solid teal;`
  }
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
        console.log('Space!');
        emitInteraction();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);

    }
  });

  const {xPos, yPos} = getPosition(scene);

  return (
    <Container 
      shouldShowTile={!shouldShowTile}
      xPos={xPos}
      yPos={yPos}
      onMouseEnter={emitInteraction}
      onClick={emitInteraction}>
      <p>HOVER HERE</p>
    </Container>
  );
}
