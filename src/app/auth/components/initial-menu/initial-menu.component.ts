import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial-menu',
  templateUrl: './initial-menu.component.html',
  styleUrls: ['./initial-menu.component.less']
})
export class InitialMenuComponent implements OnInit {
  options = ['INICIO', 'SERVICIOS', 'NUESTRO EQUIPO', 'PORTAFOLIO', 'CONTÁCTO', 'TÉRMINOS Y CONDICIONES']
  constructor() { }

  ngOnInit(): void {
  }

}
