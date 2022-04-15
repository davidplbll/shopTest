import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-auth',
  templateUrl: './page-auth.component.html',
  styleUrls: ['./page-auth.component.less']
})
export class PageAuthComponent implements OnInit {

  stepperOptions = [
    {
      label: 'Ingreso',
      id: 'login',
    },
    {
      label: 'Registro',
      id: 'register',
    },
  ]
  viewMenu: boolean = true;
  actualOption = ''

  constructor() { }

  ngOnInit(): void {
    this.actualOption = this.stepperOptions[0].id;
  }

  chageStep(event: string) {
    console.log("index ", event);
    this.actualOption = event;
  }

}
