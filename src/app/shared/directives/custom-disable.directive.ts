import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appCustomDisable]'
})
export class CustomDisableDirective implements OnChanges {
  @Input() appCustomDisable: boolean = false;
  constructor(private render: Renderer2, private el: ElementRef) {
    console.log("el ", el);

  }
  ngOnChanges(): void {
    if (this.appCustomDisable) {
      this.render.setAttribute(this.el.nativeElement, 'disabled', 'true');
    } else {
      this.render.removeAttribute(this.el.nativeElement, 'disabled');
    }
  }

}
