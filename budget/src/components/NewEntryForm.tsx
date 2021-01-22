import React from 'react';
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';

const NewEntryForm = () => {
  return (
    <Form unstackable>
      <Form.Group widths={3}>
        <Form.Input
          icon='tags'
          width={12}
          label='Description'
          placeholder='New shinny thing'
        />
        <Form.Input
          widths={2}
          label='Value'
          placeholder='100.00'
          icon='dollar'
          iconPosition='left'
        ></Form.Input>
      </Form.Group>
      <ButtonSaveOrCancel />
    </Form>
  );
};

export default NewEntryForm;
