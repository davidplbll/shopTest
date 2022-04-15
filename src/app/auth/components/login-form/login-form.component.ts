import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { validatecontrol } from '@shared/utils/functions';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent implements OnInit {

  authForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  validatecontrol(control: string) {
    return validatecontrol(this.authForm.get(control));
  }
  login() {

  }

}
