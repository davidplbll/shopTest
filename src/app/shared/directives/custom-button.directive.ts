import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomButton]'
})
export class CustomButtonDirective {
  @Input() color: string = ''
  @Input()
  set disabled(value: boolean) {
    if (value) {
      this.render.addClass(this.el.nativeElement, 'disabled');
    } else {
      this.render.removeClass(this.el.nativeElement, 'disabled');
    }
  }
  constructor(private render: Renderer2, private el: ElementRef) {
  }

  ngOnInit(): void {
    this.render.addClass(this.el.nativeElement, 'custom-button');
    if (this.color) {
      this.render.addClass(this.el.nativeElement, this.color);
    }
  }

}
