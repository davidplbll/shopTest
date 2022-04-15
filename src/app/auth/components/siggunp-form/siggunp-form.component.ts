import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { validatecontrol } from '@shared/utils/functions';

@Component({
  selector: 'app-siggunp-form',
  templateUrl: './siggunp-form.component.html',
  styleUrls: ['./siggunp-form.component.less']
})
export class SiggunpFormComponent implements OnInit {

  authForm = this.fb.group({
    name: ['', Validators.required,],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  validatecontrol(control: string) {
    return validatecontrol(this.authForm.get(control));
  }

  register() {

  }

}
