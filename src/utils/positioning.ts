import {Position} from '../types/cursorState';
import {REFERNCE_HEIGHT, REFERNCE_WIDTH} from './constants';

export function adjustToScreenSize({xPos, yPos}: Position) {
  const width = document.body.clientWidth;
  const height = document.body.clientHeight; 
  
  // h / w
  const bgAspectRatio = 1080 / 4800;
  const scale =  height / REFERNCE_HEIGHT;
  console.log(`
Height:${height}
Width: ${width}
Scale: ${scale}
bgAspectRatio: ${bgAspectRatio}
`);
  return {xPos: xPos * scale, yPos: yPos * scale};
}
