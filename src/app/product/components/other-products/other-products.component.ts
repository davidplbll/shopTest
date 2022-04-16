import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { selectProduct } from "../../actions";
import { getProductsSelector } from "../../reducers/product.reducer";
@Component({
  selector: 'app-other-products',
  templateUrl: './other-products.component.html',
  styleUrls: ['./other-products.component.less']
})
export class OtherProductsComponent implements OnInit {

  products$ = this.store.select(getProductsSelector);
  constructor(private store: Store) { }
  ngOnInit(): void {
  }
  selectProduct(product: any) {
    this.store.dispatch(selectProduct({ product }));
  }
}
