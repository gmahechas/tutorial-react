import React, { useState } from 'react'

import { InputText } from 'primereact/inputtext';

function InputShared() {
  const [value, setValue] = useState('');
  return <InputText value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
}

export default InputShared;

