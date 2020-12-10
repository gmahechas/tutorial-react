import React, { memo } from 'react';

const ButtonShared2 = memo(({increment }: any) => {
  console.log('Me volvi a rederizar');
  return <button onClick={() => increment()}>Incrementar</button>;
});

export default ButtonShared2;
