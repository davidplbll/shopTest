import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { validatecontrol } from '@shared/utils/functions';
import { Store } from '@ngrx/store'
import { loadLogin } from '../../actions'
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent {

  authForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })
  constructor(private fb: FormBuilder, private store: Store) { }


  validatecontrol(control: string) {
    return validatecontrol(this.authForm.get(control));
  }
  login() {
    this.store.dispatch(loadLogin({ data: this.authForm.value }))
  }

}
