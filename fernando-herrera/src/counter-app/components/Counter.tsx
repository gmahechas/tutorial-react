import React, { FC } from 'react';

interface IProps extends React.HTMLAttributes<HTMLElement> {
  counter: number;
}

const Counter: FC<IProps> = ({ counter }) => {
  return <div>contador {counter}</div>;
};

const defaultProps = { counter: 25 };
Counter.defaultProps = defaultProps;

export default Counter;
