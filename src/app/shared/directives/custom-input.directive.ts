import { ElementRef, OnInit, } from '@angular/core';
import { Directive, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomInput]'
})
export class CustomInputDirective implements OnInit {

  constructor(private render: Renderer2, private el: ElementRef) {
  }

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'custom-input');
  }

}
