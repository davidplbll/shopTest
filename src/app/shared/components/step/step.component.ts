import { Component, ElementRef, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.less']
})
export class StepComponent implements OnInit {

  constructor(private render: Renderer2, private el: ElementRef) {
    console.log("el ", el);

  }

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'custom-input');
  }

}
