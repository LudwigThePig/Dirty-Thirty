import { Scenes } from "../App";
import { Position } from "../types/cursorState";

export const SKIER_HEIGHT = 75;
export const SKIER_WIDTH = 90;

const INITIAL_TRIGGER_POSITION = {xPos: 850, yPos: 550};
const LIFT_TRIGGER_POSITION = {xPos: 800, yPos: 200};
const DOWNHILL_TRIGGER_POSITION = {xPos: 1400, yPos: 550};
const LODGE_TRIGGER_POSITION = {xPos: 1300, yPos: 600};
const MODAL_TRIGGER_POSITION = {xPos: 0, yPos: 0};

export function getTriggerPosition(scene: Scenes) {
  switch(scene) {
    case Scenes.INITIAL:
      return INITIAL_TRIGGER_POSITION;
    case Scenes.LIFT:
      return LIFT_TRIGGER_POSITION;
    case Scenes.DOWNHILL:
      return DOWNHILL_TRIGGER_POSITION;
    case Scenes.LODGE:
      return LODGE_TRIGGER_POSITION;
    case Scenes.MODAL:
      return MODAL_TRIGGER_POSITION;
    default:
      return {xPos: 0, yPos: 0};
  }
}
