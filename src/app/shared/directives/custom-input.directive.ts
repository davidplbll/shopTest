import { ElementRef, HostListener, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Directive, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomInput]'
})
export class CustomInputDirective implements OnInit, OnChanges {

  constructor(private render: Renderer2, private el: ElementRef) {
    console.log("el ", el);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes ", changes);
  }

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'custom-input');
  }

}
