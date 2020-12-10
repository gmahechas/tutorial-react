import React, { FC } from 'react'

interface InputProps extends React.HTMLAttributes<HTMLElement> {
  value: number;
}

const InputShared: FC<InputProps> = ({ value, onChange }) => {
  return <input type='text' onChange={onChange} value={value} />;
};

export default InputShared
