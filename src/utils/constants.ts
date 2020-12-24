import {Scenes} from '../App';
import {Position} from '../types/cursorState';
import {adjustToScreenSize} from './positioning';

export const SKIER_HEIGHT = 75;
export const SKIER_WIDTH = 90;

/* The height used to position items when developing this site */
export const REFERNCE_HEIGHT = 722;
/* The height used to position items when developing this site */
export const REFERNCE_WIDTH = 1536;

const INITIAL_TRIGGER_POSITION = {xPos: 850, yPos: 550};
const LIFT_TRIGGER_POSITION = {xPos: 800, yPos: 200};
const DOWNHILL_TRIGGER_POSITION = {xPos: 1000, yPos: 550};
const LODGE_TRIGGER_POSITION = {xPos: 1100, yPos: 600};
const MODAL_TRIGGER_POSITION = {xPos: -9999, yPos: -9999}; // hack because this is a side project

export function getTriggerPosition(scene: Scenes): Position {
  switch(scene) {
    case Scenes.INITIAL:
      return adjustToScreenSize(INITIAL_TRIGGER_POSITION);
    case Scenes.LIFT:
      return adjustToScreenSize(LIFT_TRIGGER_POSITION);
    case Scenes.DOWNHILL:
      return adjustToScreenSize(DOWNHILL_TRIGGER_POSITION);
    case Scenes.LODGE:
      return adjustToScreenSize(LODGE_TRIGGER_POSITION);
    case Scenes.MODAL:
      return adjustToScreenSize(MODAL_TRIGGER_POSITION);
    default:
      return {xPos: 0, yPos: 0};
  }
}
