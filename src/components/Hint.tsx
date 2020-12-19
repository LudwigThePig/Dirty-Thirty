import React from 'react';

export interface HintProps {
  message: string;
}

export function Hint({message}: HintProps) {
  return (
    <p>{message}</p>
  );
}