import React, { FC } from 'react';

interface FragmentSharedProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const FragmentShared: FC<FragmentSharedProps> = (props) => {
  return <>{props.children}</>;
};

export default FragmentShared;
