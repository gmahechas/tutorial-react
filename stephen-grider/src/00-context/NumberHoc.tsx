import React from 'react';

import { useNumberContext } from './NumberContext';

const NumberHoc = () => {
  const { number } = useNumberContext();
  return <div>Numero {number}</div>;
};

export default NumberHoc;
