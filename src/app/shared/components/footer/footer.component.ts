import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template:`<div>© Copyright</div>`,
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
