import React, { FC } from 'react';

interface IProps {}
const FragmentHoc: FC<IProps> = ({ children }) => {
  return <>{children}</>;
};

export default FragmentHoc;
