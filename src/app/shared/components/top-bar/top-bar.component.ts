import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.less']
})
export class TopBarComponent implements OnInit {

  @Input() cartAmount: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
