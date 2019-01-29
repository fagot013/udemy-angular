import { Action } from '@ngrx/store';

export const TRY_SIGNUP = 'TRY_SIGNUP';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';

export class TrySingup implements Action {
  readonly type = TRY_SIGNUP;
  constructor(public payload: { username: string, password: string }) { }
}

export class SetToken implements Action {
  readonly type: string = SET_TOKEN;
  constructor( public payload: string) {}
}

export class SignIn implements Action {
  readonly type: string = SIGN_IN;
}

export class SignUp implements Action {
  readonly type: string = SIGN_UP;
}

export class Logout implements Action {
  readonly type: string = LOGOUT;
}

export type AuthActions =
  SetToken |
  SignIn |
  SignUp |
  Logout |
  TrySingup;



