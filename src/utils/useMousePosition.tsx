import { useEffect, useState } from 'react';
import { useThrottle } from './useThrottle';

export const useMousePosition = () => {
  const [position, setPosition] = useThrottle({ xPos: 0, yPos: 0 }, 15);

  useEffect(() => {
    const setFromMouseEvent = (e: MouseEvent) => setPosition({
      xPos: e.clientX,
      yPos: e.clientY,
    });
    const setFromTouchEvent = ({ touches }: TouchEvent) => setPosition({
      xPos: touches[0].clientX,
      yPos: touches[0].clientY,
    });

    window.addEventListener('mousemove', (setFromMouseEvent));
    window.addEventListener('touchmove', setFromTouchEvent, false);

    return () => {
      window.removeEventListener('mousemove', setFromMouseEvent);
      window.removeEventListener('touchmove', setFromTouchEvent, false);
    };
  }, []);

  return { position };
};
