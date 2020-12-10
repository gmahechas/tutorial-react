import React, { memo } from 'react';

const Small = memo(({ value }: { value: number }) => {
  console.log('Cambio en small')
  return <small>{value}</small>;
});

export default Small;
