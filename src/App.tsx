import React, {useState} from 'react';

import {Background, BackgroundProps} from './components/Background';
import {Cursor} from './components/Cursor';
import {TodoList} from './components/TodoList';
import {InteracionTile} from './components/InteractionTile';
import {Modal} from './components/Modal';
import {adjustToScreenSize} from './utils/positioning';

export enum Scenes {
  INITIAL = 'Initial',
  LIFT = 'Lift',
  DOWNHILL = 'Downhil',
  LODGE = 'Lodge',
  MODAL = 'Modal',
}

function App() {
  const [scene, setScene] = useState<Scenes>(Scenes.INITIAL);
  const [backroundProps, setBackgroundProps] = useState<BackgroundProps>({xPos: 0, showCursor: false})
  const onInteraction = () => {
    switch (scene) {
      case Scenes.INITIAL: {
        const {xPos} = adjustToScreenSize({xPos: -600, yPos: 0});
        setScene(Scenes.LIFT);
        setBackgroundProps({...backroundProps, xPos});
        break;
      }
      case Scenes.LIFT: {
        const {xPos} = adjustToScreenSize({xPos: -1200, yPos: 0});
        setBackgroundProps({...backroundProps, xPos});
        setScene(Scenes.DOWNHILL);
        break;
      }
      case Scenes.DOWNHILL: {
        const {xPos} = adjustToScreenSize({xPos: -2000, yPos: 0});
        setBackgroundProps({...backroundProps, xPos});
        setScene(Scenes.LODGE);
        break;
      }
      case Scenes.LODGE: {
        const {xPos} = adjustToScreenSize({xPos: -2000, yPos: 0});
        setBackgroundProps({...backroundProps, xPos, showCursor: true});
        setScene(Scenes.MODAL);
        break;
      }
      case Scenes.MODAL: {
        const {xPos} = adjustToScreenSize({xPos: 0, yPos: 0});
        setBackgroundProps({...backroundProps, xPos, showCursor: false});
        setScene(Scenes.INITIAL);
        break;
      }
    }
  };

  return (
    <Background {...backroundProps}>
      <InteracionTile 
        scene={scene}
        emitInteraction={onInteraction} />
      <Cursor />
      <TodoList currentScene={scene} />
      {scene === Scenes.MODAL && <Modal dismissModal={() => {onInteraction()}} />}
      {
        window.innerWidth < adjustToScreenSize({xPos: 1100, yPos:0}).xPos &&
          <h3>Your screen isn't wide enough for this game. Try making your browser window shorter.</h3>
      }
    </Background>
  );
}

export default App;
