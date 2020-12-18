import React from 'react';
import styled from 'styled-components';
import { Scenes } from '../App';

const Container = styled.div`
  height: 50px;
  width: 200px;
  margin: 20px 40px;
  background: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export interface StartProps {
  initSceneStart: () => void;
}

export function Start({initSceneStart}: StartProps) {
  return (
    <Container onMouseEnter={() => initSceneStart()}>
      <p>START HERE</p>
    </Container>
  );
}
