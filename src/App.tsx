import React, {useState} from 'react';

import {Cursor} from './components/Cursor';
import { LiftScene } from './components/LiftScene';
import {Start} from './components/Start';

export enum Scenes {
  INITIAL = 'initial',
  LIFT = 'LIFT',
  SKIING = 'SKIING',
  LODGE = 'LODGE',
}

function App() {
  const [scene, setScene] = useState<Scenes>(Scenes.INITIAL);

  const onInitSceneStart = () => {
    if (scene === Scenes.INITIAL) {
      setScene(Scenes.LIFT);
    }
  };

  return (
    <div className="App">
      <Start initSceneStart={onInitSceneStart} />
      <Cursor />
      {scene === Scenes.LIFT && <LiftScene />}
    </div>
  );
}

export default App;
