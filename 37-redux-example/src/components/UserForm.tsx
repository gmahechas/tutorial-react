import React from 'react'
import { reduxForm } from 'redux-form';

const validate = (values: any) => {
  const errors = {
    firstname: ''
  };
  if(values.firstname) {
    errors.firstname = 'Required';
  }
  return errors;
};

function UserForm(props: any) {

  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstname">First Name</label>
        <input name="firstname" type="text" />
      </div>
      <div>
        <label htmlFor="lastname">Last Name</label>
        <input name="lastname" type="text" />
      </div>
      <input type="submit" value="Send" />
    </form>
  )
}

export default reduxForm({
  form: 'user',
  validate
})(UserForm);
