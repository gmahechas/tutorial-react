import React, { FC } from 'react';

interface IProps {
  color: string;
  onClick: () => void;
}

const Child: FC<IProps> = ({ color, onClick }) => {
  return <div onClick={onClick}>{color}</div>;
};

export default Child;
