import styled from 'styled-components';

export interface BackgroundProps {
  xPos: number;
}

export const Background = styled.div<BackgroundProps>`
  background-image: url("background.png");
  height: 100vh;
  overflow-x: scroll;
  width: 100vw;
  background-size: auto 100vh;
  background-position-x: ${props => props.xPos}px;
  transition: background-position-x 800ms;
`;