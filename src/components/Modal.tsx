import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 400px;
  padding: 2em;
  background: #ffffff88;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  border: none;
  background: #121212;
  border-radius: 0;
  padding: 1.5em 2em;
  color: white;
  font-weight: bold;

`;

export interface ModalProps {
  dismissModal: () => void;
}

export function Modal({dismissModal}: ModalProps) {
  return (
    <Container>
      <p>Hello World</p>
      <Button onClick={dismissModal}>DISMISS</Button>
    </Container>
  )
}