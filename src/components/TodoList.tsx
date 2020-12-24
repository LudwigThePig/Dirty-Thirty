import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Scenes } from '../App';

export interface TodoProps {
  currentScene: Scenes;
}

export interface LiProps {
  completed: boolean;
  visible: boolean;
}

const ListElement = styled.li<LiProps>`
  ${({visible}) => !visible && 'display: none;'}
  text-decoration: ${({completed}) => completed ? 'line-through' : 'none'};
`;

export function TodoList({currentScene}: TodoProps) {
  const [index, setIndex] = useState(0);
  const scenes = [Scenes.INITIAL, Scenes.LIFT, Scenes.DOWNHILL, Scenes.LODGE, Scenes.MODAL];
  useEffect(() => {
    const newIndex = scenes.indexOf(currentScene);
    setIndex(newIndex);
  }, [currentScene]);

  const getLiProps = (liIndex: number, curIndex: number):LiProps => ({
    completed: curIndex > liIndex,
    visible: curIndex >= liIndex,
  });
  return (
    <div>
      <h3>Todo: {index}</h3>
      <ul>
        <ListElement {...getLiProps(0, index)}>
          Get on the lift.
        </ListElement>
        
        <ListElement {...getLiProps(1, index)}>
          Ride lift to the top of the hill.
        </ListElement>
        
        <ListElement {...getLiProps(2, index)}>
          Shred the gnar.
        </ListElement>
        
        <ListElement {...getLiProps(3, index)}>
          Après at the condo.
        </ListElement>
        
        <ListElement {...getLiProps(4, index)}>
          Act like this was a total surprise.
        </ListElement>
      </
      ul>
    </div>
  );
}