import React, { useEffect, useRef } from 'react';

export interface CanvasProps {}

export function Canvas(props: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d') as CanvasRenderingContext2D;
      context.fillStyle = '#000000';
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    }
  }, [])

  return <canvas ref={canvasRef} {...props} />;
}