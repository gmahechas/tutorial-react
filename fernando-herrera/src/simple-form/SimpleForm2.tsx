import React, { useEffect } from 'react';

import InputShared from '../hoc/InputShared';
import UseFormHook from '../hooks/UseFormHook';

interface IForm {
  name: string;
  email: string;
  password: string;
}
const SimpleForm2 = () => {
  const { state:formState, handleInputChange } = UseFormHook<IForm>({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formState;

  useEffect(() => {
    console.log('cambio email')
  }, [ email]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>useEffect</h1>
      <hr />
      <div>
        <InputShared
          name='name'
          value={name}
          onChange={handleInputChange}
        ></InputShared>

        <InputShared
          name='email'
          value={email}
          onChange={handleInputChange}
        ></InputShared>

        <input
          type='password'
          name='password'
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default SimpleForm2;
