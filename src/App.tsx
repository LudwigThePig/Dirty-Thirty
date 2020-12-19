import React, {useState} from 'react';

import {Background, BackgroundProps} from './components/Background';
import {Cursor} from './components/Cursor';
import {Hint} from './components/Hint';
import {InteracionTile} from './components/InteractionTile';
import {Modal} from './components/Modal';

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
      case Scenes.INITIAL:
        setScene(Scenes.LIFT);
        setBackgroundProps({...backroundProps, xPos: -600});
        break;
      case Scenes.LIFT:
        setScene(Scenes.DOWNHILL);
        setBackgroundProps({...backroundProps, xPos: -1200});
        break;
      case Scenes.DOWNHILL:
        setScene(Scenes.LODGE);
        setBackgroundProps({...backroundProps, xPos: -1800});
        break;
      case Scenes.LODGE:
        setBackgroundProps({...backroundProps, xPos: -1800});
        setScene(Scenes.MODAL);
        break;
      case Scenes.MODAL:
        setBackgroundProps({...backroundProps, xPos: 0});
        setScene(Scenes.INITIAL);
        break;
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
