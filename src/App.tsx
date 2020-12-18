import React, {useState} from 'react';

import {Background, BackgroundProps} from './components/Background';
import {Cursor} from './components/Cursor';
import { LiftScene } from './components/LiftScene';
import {Start} from './components/Start';

export enum Scenes {
  INITIAL = 'Initial',
  LIFT = 'Lift',
  SKIING = 'Skiing',
  DOWNHILL = 'Downhil',
  LODGE = 'Lodge',
  MODAL = 'Modal',
}

function App() {
  const [scene, setScene] = useState<Scenes>(Scenes.INITIAL);
  const [backroundProps, setBackgroundProps] = useState<BackgroundProps>({xPos: 0})
  const onInitSceneStart = () => {
    switch (scene) {
      case Scenes.INITIAL:
        setScene(Scenes.DOWNHILL);
        setBackgroundProps({...backroundProps, xPos: -600});
        break;
      case Scenes.DOWNHILL:
        setScene(Scenes.LODGE);
        setBackgroundProps({...backroundProps, xPos: -1200});
        break;
      case Scenes.LODGE:
        setBackgroundProps({...backroundProps, xPos: -1800});
        setScene(Scenes.MODAL);
        break;
      case Scenes.MODAL:
        // show modal...
        setBackgroundProps({...backroundProps, xPos: 0});
        setScene(Scenes.INITIAL);
        break;
    }
  };

  return (
    <Background {...backroundProps}>
      <Start initSceneStart={onInitSceneStart} />
      <Cursor />
      {scene === Scenes.LIFT && <LiftScene />}
    </Background>
  );
}

export default App;
