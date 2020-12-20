import React from 'react';
import ButtonHoc from './ButtonHoc';
import NumberHoc from './NumberHoc';

import { NumberContext, useNumberContext } from './NumberContext';

const Index = () => {
  const { number } = useNumberContext();

  return (
    <NumberContext.Provider value={{ number }}>
      <NumberHoc />
      <ButtonHoc>+</ButtonHoc>
      <ButtonHoc>-</ButtonHoc>
    </NumberContext.Provider>
  );
};

export default Index;
