import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { validatecontrol } from '@shared/utils/functions';
import { Store } from '@ngrx/store'
import { loadRegister } from '../../actions'
@Component({
  selector: 'app-siggunp-form',
  templateUrl: './siggunp-form.component.html',
  styleUrls: ['./siggunp-form.component.less']
})
export class SiggunpFormComponent {

  authForm = this.fb.group({
    name: ['', Validators.required,],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })
  constructor(private fb: FormBuilder, private store: Store) { }

  validatecontrol(control: string) {
    return validatecontrol(this.authForm.get(control));
  }

  register() {
    this.store.dispatch(loadRegister({ data: this.authForm.value }))
  }

}
