import React, { FC, memo } from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {}

const ButtonShared: FC<ButtonProps> = memo((props) => {
  console.log('Me volvi a renderizar');
  return <button onClick={props.onClick}>{props.children}</button>;
});

export default ButtonShared;
