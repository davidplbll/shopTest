import { createAction, props } from '@ngrx/store';
import { LOGIN, USER } from './../interfaces'

export const loadLogin = createAction(
  '[Auth] Login',
  props<{ data: LOGIN }>()
);

export const loadLoginSuccess = createAction(
  '[Auth] Login Success',
  props<{ data: USER }>()
);

export const loadLoginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);

export const loadRegister = createAction(
  '[Auth] Register',
  props<{ data: USER }>()
);

export const loadRegisterSuccess = createAction(
  '[Auth] Register Success',
  props<{ data: USER }>()
);

export const loadRegisterFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);
