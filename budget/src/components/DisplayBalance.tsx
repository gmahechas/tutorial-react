import React, { FC } from 'react';
import { Statistic, StatisticProps } from 'semantic-ui-react';

interface IProps extends StatisticProps {
  title: string;
  value: number;
}

const DisplayBalance: FC<IProps> = ({ title, value, color, size }) => {
  return (
    <Statistic size={size} color={color}>
      <Statistic.Label style={{ textAlign: 'left' }}>{title}</Statistic.Label>
      <Statistic.Value>{value}</Statistic.Value>
    </Statistic>
  );
};

export default DisplayBalance;
