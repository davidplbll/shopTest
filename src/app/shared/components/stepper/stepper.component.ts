import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { STEPPER_CONFIG } from './stepper.interface'
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.less']
})
export class StepperComponent implements OnInit {

  @Input() options: STEPPER_CONFIG[] = []
  @Output() selectedChange = new EventEmitter<string>();
  selected: string = '';
  constructor() { }

  ngOnInit(): void {
    if (this.options.length) {
      this.selected = this.options[0]?.id;
    }
  }

  selectOption(index: string) {
    this.selected = index;
    this.selectedChange.emit(index);
  }

}
