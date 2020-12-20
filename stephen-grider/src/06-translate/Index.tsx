import React, { useState } from 'react';

import Dropdown from '../05-dropdown/Dropdown';
import Translate from './Translate';

const options = [
  {
    label: 'Africa',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
];

const Index = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');
  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Text</label>
          <input value={text} onChange={(e: any) => setText(e.target.value)} />
        </div>
      </div>

      <Dropdown
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
        label='Select Language'
      />
      <Translate text={text} language={language.value} />
    </div>
  );
};

export default Index;
