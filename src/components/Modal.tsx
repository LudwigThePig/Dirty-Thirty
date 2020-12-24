import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 400px;
  max-height: 80vh;
  padding: 2em;
  background: #ffffffaa;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  border: none;
  background: #121212;
  border-radius: 0;
  padding: 1em 1.5em;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

const Anchor = styled.a`
  color: #008080;
  &:hover { color: #04cccc; }
  font-weight: bold;
  text-decoration: none;
`;

const Image = styled.img`
  max-width: 100%;
  margin: 1em;
`;

export interface ModalProps {
  dismissModal: () => void;
}

export function Modal({dismissModal}: ModalProps) {
  const googleMapsLink = 'https://goo.gl/maps/Ea19ZPt4NeXp1dXe9';
  return (
    <Container>
      <h3>Pack yer skis!</h3>
      <p>January 30, 2021 - January 31, 2021</p>
      <Anchor  href={googleMapsLink}
               target="_blank" 
               rel="noopener noreferrer">
        747 West Pacific Avenue, Unit 333,<br/>Telluride, CO 81435, United States
      </Anchor>
      <Image src="condo.jpg" alt="Condo living room picture" />
      <Button onClick={dismissModal}>DISMISS</Button>
    </Container>
  )
}