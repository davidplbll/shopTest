import { createAction, props } from '@ngrx/store';
import { PRODUCT } from './../interfaces'
export const loadProducts = createAction(
  '[Products] Load Products'
);
export const loadProductsSuccess = createAction(
  '[Products] Load Products Success',
  props<{ products: PRODUCT[] }>()
);
export const loadProductsFailure = createAction(
  '[Products] Load Products Failure',
  props<{ error: any }>()
);
export const selectProduct = createAction(
  '[Products] select Product',
  props<{ product: PRODUCT }>()
);




