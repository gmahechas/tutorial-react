import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';

export const signup = (formProps: any, callback: any) => async (dispatch: any) => {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: formProps.email,
      body: formProps.password,
      userId: 1
    });

    dispatch({ type: AUTH_USER, payload: { token: response.data.title } })
    callback();
  } catch (error) {
    console.log(error);
    dispatch({ type: AUTH_ERROR, payload: { error: 'hay error' } })
  }

}