import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-check-input',
  templateUrl: './check-input.component.html',
  styleUrls: ['./check-input.component.less']
})
export class CheckInputComponent implements OnInit {

  @Input() formControl: FormControl = new FormControl();
  constructor() { }

  ngOnInit(): void {
  }

}
