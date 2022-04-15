import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent, StepComponent } from './components';
import { CheckInputComponent } from './components/check-input/check-input.component';
import { ReactiveFormsModule } from "@angular/forms";
import { CustomButtonDirective, CustomInputDirective } from './directives'
@NgModule({
  declarations: [
    StepperComponent,
    StepComponent,
    CustomInputDirective,
    CheckInputComponent,
    CustomButtonDirective,

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
    CustomButtonDirective
  ]
})
export class SharedModule { }
