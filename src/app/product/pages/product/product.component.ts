import { Component, OnInit } from '@angular/core';
import { loadProducts } from './../../actions';
import { Store } from '@ngrx/store';
import { getProductSelector } from './../../reducers/product.reducer';
import { PRODUCT } from '../../interfaces';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {

  product$ = this.store.select(getProductSelector);
  product: PRODUCT | null = null;
  viewMoreDescription: boolean = false;
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
    this.product$.subscribe(product => {
      this.product = product;
    });
  }

}
