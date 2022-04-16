import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { getShoppingCartSelector } from "@product/reducers/product.reducer";
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent {

  cart$ = this.store.select(getShoppingCartSelector).pipe(
    map(cart => cart.reduce((acc, curr) => acc + curr.amount, 0))
  );
  constructor(private store: Store) { }


}
