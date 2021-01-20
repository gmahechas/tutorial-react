import React from 'react';
import Child from './Child';

const Parent = () => {
  return (
    <div>
      <Child color='red' onClick={() => console.log('click')} />
    </div>
  );
};

export default Parent;
