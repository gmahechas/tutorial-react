import React, { FC, useEffect } from 'react';

/* const dicctionary = [
  { value: 'af', label: 'Hola Africano' },
  { value: 'ar', label: 'Hola Arabic' },
  { value: 'hi', label: 'Hola Hindi' },
]; */

interface IProps {
  text: string;
  language: string;
}

const Translate: FC<IProps> = ({ text, language }) => {
  useEffect(() => {}, [text, language]);
  return (
    <div>{`translate ${text} to ${language} result`}</div>
  );
};

export default Translate;
