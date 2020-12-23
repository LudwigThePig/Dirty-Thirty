import React, {useState} from 'react';

import {Background, BackgroundProps} from './components/Background';
import {Cursor} from './components/Cursor';
import {Hint} from './components/Hint';
import {InteracionTile} from './components/InteractionTile';
import {Modal} from './components/Modal';
import { adjustToScreenSize } from './utils/positioning';

export enum Scenes {
  INITIAL = 'Initial',
  LIFT = 'Lift',
  DOWNHILL = 'Downhil',
  LODGE = 'Lodge',
  MODAL = 'Modal',
}

function App() {
  const [scene, setScene] = useState<Scenes>(Scenes.INITIAL);
  const [backroundProps, setBackgroundProps] = useState<BackgroundProps>({xPos: 0})
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
        const {xPos} = adjustToScreenSize({xPos: -1800, yPos: 0});
        setBackgroundProps({...backroundProps, xPos});
        setScene(Scenes.LODGE);
        break;
      }
      case Scenes.LODGE: {
        const {xPos} = adjustToScreenSize({xPos: -1800, yPos: 0});
        setBackgroundProps({...backroundProps, xPos});
        setScene(Scenes.MODAL);
        break;
      }
      case Scenes.MODAL: {
        const {xPos} = adjustToScreenSize({xPos: 0, yPos: 0});
        setBackgroundProps({...backroundProps, xPos});
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
      <Hint message={'Do something'} />
      {scene === Scenes.MODAL && <Modal dismissModal={() => {onInteraction()}} />}
    </Background>
  );
}

export default App;
