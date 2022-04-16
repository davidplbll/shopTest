import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { selectProduct, loadProducts, loadProductsFailure, loadProductsSuccess } from '../actions'
import { PRODUCT } from './../interfaces'
export const productFeatureKey = 'products';

export interface State {
  products: PRODUCT[];
  error: any;
  loading: boolean;
  product: PRODUCT | null;
}

export const initialState: State = {
  products: [],
  error: null,
  loading: false,
  product: null

};

export const reducer = createReducer(
  initialState,
  on(loadProducts, (state) => ({
    ...state,
    loading: true
  })),
  on(loadProductsSuccess, (state, { products }) => ({
    ...state,
    loading: false,
    products
  })),
  on(loadProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(selectProduct, (state, { product }) => ({
    ...state,
    product
  }))
);


const getProducts = (state: State) => state.products;
const getProductsLoading = (state: State) => state.loading;
const getProductsError = (state: State) => state.error;
const getProduct = (state: State) => state.product;
const getProductsState = createFeatureSelector<State>(productFeatureKey);
export const getProductsSelector = createSelector(getProductsState, getProducts);
export const getProductsLoadingSelector = createSelector(getProductsState, getProductsLoading);
export const getProductsErrorSelector = createSelector(getProductsState, getProductsError);
export const getProductSelector = createSelector(getProductsState, getProduct);

