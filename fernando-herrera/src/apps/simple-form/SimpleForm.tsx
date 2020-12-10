import React, { useEffect } from 'react';
import FragmentShared from '../../hoc/FragmentShared';
import InputShared from '../../hoc/InputShared';
import UseStateHook from '../../hooks/UseStateHook';
import Message from './Message';

const SimpleForm = () => {
  const [formState, setFormState] = UseStateHook({
    name: '',
    email: '',
  });
  const { name, email } = formState;

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [target.name]: target.value });
  };

  useEffect(() => {
    console.log('init');
  }, []);

 /*  useEffect(() => {
    console.log('cambio form');
  }, [formState]); */

/*   useEffect(() => {
    console.log('email cambio');
  }, [email]); */

  return (
    <FragmentShared>
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
      </div>
      {name === '123' && <Message />}
    </FragmentShared>
  );
};

export default SimpleForm;
