import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PRODUCT, PRODUCT_CONFIGURATION } from "../../interfaces";
import { FormBuilder, Validators } from '@angular/forms'
import { addProductShopping } from '../../actions'
import { getProductSelector } from '../../reducers/product.reducer'
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-product-options',
  templateUrl: './product-options.component.html',
  styleUrls: ['./product-options.component.less']
})
export class ProductOptionsComponent implements OnChanges {

  @Input() product!: PRODUCT;
  @Input() productConfigurations: PRODUCT_CONFIGURATION[] = [];
  configurationForm = this.fb.group({
    amount: [0, Validators.required],
  });
  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnChanges(): void {
    this.configurationForm.reset();
    Object.keys(this.configurationForm.controls).filter(key => key != 'amount').forEach(key => {
      this.configurationForm.removeControl(key);
    });
    if (this.productConfigurations.length) {
      this.productConfigurations.forEach(
        (configuration) => {
          this.configurationForm.addControl(configuration.name,
            this.fb.control(configuration.options.find(option => option.amount > 0)?.name, Validators.required)
          );
        }
      )
    }
    this.configurationForm.get('amount')?.setValue(1);
  }

  chageAmount(value: string) {
    const amount = this.configurationForm?.get('amount')?.value ?? 0;
    if (value === '+') {
      this.configurationForm?.get('amount')?.setValue(amount + 1);
    } else if (value === '-') {
      this.configurationForm?.get('amount')?.setValue(amount - 1);
    }
  }

  save() {
    const { amount, ...data } = this.configurationForm.value;
    this.store.dispatch(

      addProductShopping({
        product: {
          product: this.product,
          amount,
          configuration: Object.entries(data).map(
            ([name, option]) => ({
              name, option: String(option)
            }))
        },
      })
    )
  }
}
