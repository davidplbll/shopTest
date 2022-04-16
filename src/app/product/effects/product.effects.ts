import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductsService } from "./../services"
import { loadProducts, loadProductsFailure, loadProductsSuccess, selectProduct } from './../actions'
import { catchError, map, of, switchMap } from 'rxjs';


@Injectable()
export class ProductEffects {

  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      switchMap(() => this.productsService.getProducts().pipe(
        map(products => loadProductsSuccess({ products })),
        catchError(error => of(loadProductsFailure({ error })))
      )
      )
    )
  );

  getProductsSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProductsSuccess),
      map(({ products }) => selectProduct({ product: products[0] }))
    )
  );

  constructor(private actions$: Actions, private productsService: ProductsService) { }

}
