import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { PropsFromRedux, connector } from '../store/reducers/auth';

interface IProps
  extends Partial<PropsFromRedux>,
    InjectedFormProps,
    Partial<RouteComponentProps> {}
const Sigup: FC<IProps> = ({ handleSubmit, signup, auth, history }) => {
  const onSubmit = (formProps: any) => {
    signup!(formProps, () => {
      history!.push('/feature')
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label>Email</label>
        <Field name='email' type='text' component='input' autoComplete='none' />
      </fieldset>
      <fieldset>
        <label>Password</label>
        <Field
          name='password'
          type='password'
          component='input'
          autoComplete='none'
        />
      </fieldset>
      <button>Sign Up !!!</button>
      <div>{auth?.errorMessage && auth.errorMessage}</div>
    </form>
  );
};

export default connector(reduxForm({ form: 'signup' })(Sigup));
