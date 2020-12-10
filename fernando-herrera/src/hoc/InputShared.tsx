import React, { FC } from 'react'

interface InputProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
  value: number | string;
}

const InputShared: FC<InputProps> = ({ name, value, onChange }) => {
  return <input type='text' name={name} onChange={onChange} value={value} />;
};

export default InputShared
