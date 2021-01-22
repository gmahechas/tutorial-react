import React, { FC } from 'react';
import { Header } from 'semantic-ui-react';

interface IProps {
  title: string;
  type?: string;
}

const MainHeader: FC<IProps> = ({ title, type = 'h1' }) => {
  return <Header as={type}>{title}</Header>;
};

export default MainHeader;
