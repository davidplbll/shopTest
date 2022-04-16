import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent, StepComponent, CheckInputComponent, TopBarComponent } from './components';
import { ReactiveFormsModule } from "@angular/forms";
import { CustomButtonDirective, CustomInputDirective, CustomDisableDirective } from './directives';
import { FooterComponent } from './components/footer/footer.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
@NgModule({
  declarations: [
    StepperComponent,
    StepComponent,
    CustomInputDirective,
    CheckInputComponent,
    CustomButtonDirective,
    TopBarComponent,
    FooterComponent,
    StarRatingComponent,
    CustomDisableDirective,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    StepperComponent,
    CustomInputDirective,
    StepComponent,
    CheckInputComponent,
    CustomButtonDirective,
    TopBarComponent,
    FooterComponent,
    StarRatingComponent,
    CustomDisableDirective
  ]
})
export class SharedModule { }
