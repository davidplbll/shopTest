import { Component, OnInit, OnDestroy } from '@angular/core';
import { loadProducts } from './../../actions';
import { Store } from '@ngrx/store';
import { getProductSelector } from './../../reducers/product.reducer';
import { PRODUCT } from '../../interfaces';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit, OnDestroy {

  product$ = this.store.select(getProductSelector);
  product!: PRODUCT;
  viewMoreDescription: boolean = false;
  unSubscribeall$ = new Subject<boolean>();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
    this.product$.subscribe(product => {
      if (product) {
        this.product = product;
      }
    });
  }

  ngOnDestroy(): void {
    this.unSubscribeall$.next(true);
  }

}
