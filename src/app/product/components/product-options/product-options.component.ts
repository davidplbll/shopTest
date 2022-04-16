import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PRODUCT_CONFIGURATION } from "../../interfaces";
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-product-options',
  templateUrl: './product-options.component.html',
  styleUrls: ['./product-options.component.less']
})
export class ProductOptionsComponent implements OnChanges {

  @Input() productConfigurations: PRODUCT_CONFIGURATION[] = [];
  configurationForm = this.fb.group({
    amount: [0, Validators.required],
  });
  constructor(private fb: FormBuilder) { }
  ngOnChanges(): void {
    this.configurationForm.reset();
    if (this.productConfigurations.length) {
      this.productConfigurations.forEach(
        (configuration) => {
          this.configurationForm.addControl(configuration.name, this.fb.control('', Validators.required));
        }
      )
    }
  }

  chageAmount(value: string) {
    const amount = this.configurationForm?.get('amount')?.value ?? 0;
    if (value === '+') {
      this.configurationForm?.get('amount')?.setValue(amount + 1);
    } else if (value === '-') {
      this.configurationForm?.get('amount')?.setValue(amount - 1);
    }
  }


}
