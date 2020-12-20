import React, { FC } from 'react';

interface IProps extends React.HTMLAttributes<HTMLElement> {}

const ButtonHoc: FC<IProps> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default ButtonHoc;
