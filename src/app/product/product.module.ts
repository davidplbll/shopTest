import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "@shared"
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './pages/product/product.component';
import { ProductOptionsComponent } from './components/product-options/product-options.component';
import { OtherProductsComponent } from './components/other-products/other-products.component';
import { reducer, productFeatureKey } from './reducers/product.reducer'
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './effects/product.effects'
import { ReactiveFormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    ProductComponent,
    ProductOptionsComponent,
    OtherProductsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature(productFeatureKey, reducer),
    EffectsModule.forFeature([ProductEffects])
  ]
})
export class ProductModule { }
