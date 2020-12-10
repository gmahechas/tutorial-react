import React, { useRef } from 'react';

import ButtonShared from '../../hoc/ButtonShared';

const FocusScreen = () => {
  const inputEl = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputEl.current?.select();
  };
  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />
      <input ref={inputEl} />
      <ButtonShared onClick={handleClick}>Foco</ButtonShared>
    </div>
  );
};

export default FocusScreen;
