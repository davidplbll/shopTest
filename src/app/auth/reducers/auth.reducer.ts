import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import * as AuthActions from '../actions'
import { USER } from './../interfaces'
export const authFeatureKey = 'auth';

export interface State {
  user: USER | null;
  loading: boolean;
  successRegister: boolean;
  error: any;
}

export const initialState: State = {
  user: null,
  loading: false,
  error: null,
  successRegister: false
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.loadLogin, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(AuthActions.loadLoginSuccess, (state, { data }) => ({
    ...state,
    user: data,
    loading: false,
    error: null
  })),
  on(AuthActions.loadLoginFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(AuthActions.loadRegister, (state,) => ({
    ...state,
    loading: true,
    successRegister: false,
    error: null
  })),
  on(AuthActions.loadRegisterSuccess, (state, { data }) => ({
    ...state,
    user: data,
    loading: false,
    successRegister: true,
    error: null
  })),
  on(AuthActions.loadRegisterFailure, (state, { error }) => ({
    ...state,
    loading: false,
    successRegister: false,
    error
  }))
);


const getUser = (state: State) => state.user;
const getLoading = (state: State) => state.loading;
const getError = (state: State) => state.error;
const getSuccessRegister = (state: State) => state.successRegister;
const getAuthState = createFeatureSelector<State>(authFeatureKey);
export const getAuthUser = createSelector(getAuthState, getUser);
export const getAuthLoading = createSelector(getAuthState, getLoading);
export const getAuthError = createSelector(getAuthState, getError);
export const getAuthSuccessRegister = createSelector(getAuthState, getSuccessRegister);






