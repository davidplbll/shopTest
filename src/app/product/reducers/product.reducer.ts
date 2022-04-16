import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { selectProduct, loadProducts, loadProductsFailure, loadProductsSuccess, addProductShopping } from '../actions'
import { PRODUCT, SHOPPING_PRODDUCT } from './../interfaces'
export const productFeatureKey = 'products';

export interface State {
  products: PRODUCT[];
  error: any;
  loading: boolean;
  product: PRODUCT | null;
  shoppingCart: SHOPPING_PRODDUCT[];
}

export const initialState: State = {
  products: [],
  error: null,
  loading: false,
  product: null,
  shoppingCart: []
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
  })),
  on(addProductShopping, (state, { product }) => ({
    ...state,
    shoppingCart: [...state.shoppingCart, product]
  }))
);


const getProducts = (state: State) => state.products.filter(product => product.id !== state.product?.id);
const getProductsLoading = (state: State) => state.loading;
const getProductsError = (state: State) => state.error;
const getProduct = (state: State) => state.product;
const getShoppingCart = (state: State) => state.shoppingCart;
const getProductsState = createFeatureSelector<State>(productFeatureKey);
export const getProductsSelector = createSelector(getProductsState, getProducts);
export const getProductsLoadingSelector = createSelector(getProductsState, getProductsLoading);
export const getProductsErrorSelector = createSelector(getProductsState, getProductsError);
export const getProductSelector = createSelector(getProductsState, getProduct);
export const getShoppingCartSelector = createSelector(getProductsState, getShoppingCart);

