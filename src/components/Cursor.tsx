import * as React from 'react';
import styled from 'styled-components'
import { SKIER_HEIGHT, SKIER_WIDTH } from '../utils/constants';
import { xyToLeftUp } from '../utils/mouse';
import { useMousePosition } from '../utils/useMousePosition';

export interface CursorProps {
  xPos: number;
  yPos: number;
}

const CursorImg = styled.img<{xPos: number, yPos: number}>`
  position: absolute;
  left: ${props => props.xPos}px;
  top: ${props => props.yPos}px;
  height: ${SKIER_HEIGHT}px;
  width: ${SKIER_WIDTH}px;
`;

export function Cursor ()  {
  const {position} = useMousePosition();
  const [{xPos, yPos}, setPos] = React.useState({xPos: 0, yPos: 0});
  React.useEffect(() => {
    console.log('position changed');
    setPos(xyToLeftUp(position));
  }, [position]);
  return (
    <CursorImg src="skier-cursor.png"  xPos={xPos} yPos={yPos} />
  );
}
