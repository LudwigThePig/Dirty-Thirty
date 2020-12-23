import {Position} from '../types/cursorState';
import {REFERNCE_HEIGHT, REFERNCE_WIDTH} from './constants';

export function adjustToScreenSize({xPos, yPos}: Position) {
  const height = document.body.clientHeight;   
  const scale =  height / REFERNCE_HEIGHT;

  return {xPos: xPos * scale, yPos: yPos * scale};
}
