export const AUTH_USER = 'AUTH_USER';
export const AUTH_ERROR = 'AUTH_ERROR';

type IAuthUserAction = {
  type: typeof AUTH_USER
  payload: { token: string }
}

type IAuthErrorAction = {
  type: typeof AUTH_ERROR
  payload: { error: string }
}

export type AuthActionTypes =
  IAuthUserAction |
  IAuthErrorAction;
  