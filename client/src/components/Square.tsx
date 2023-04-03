import React, { useState } from 'react';

type Props = {
  value: string | null;
  handleClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

const Square = ({ value, handleClick }: Props) => {
  return (
    <button className='square' onClick={handleClick}>
      {value}
    </button>
  );
};

export default Square;
