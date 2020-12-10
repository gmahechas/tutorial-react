import React, { FC } from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {}

const ButtonShared: FC<ButtonProps> = (props) => {
  return <button onClick={props.onClick}>{props.children}</button>;
};

export default ButtonShared;
