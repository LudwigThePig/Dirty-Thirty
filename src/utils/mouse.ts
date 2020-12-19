import {Position} from '../types/cursorState';
import {SKIER_HEIGHT, SKIER_WIDTH} from './constants';

export function xyToLeftUp({xPos, yPos}: Position) {
  return {xPos: xPos - (SKIER_HEIGHT / 2), yPos: yPos - (SKIER_WIDTH / 2),};
}
