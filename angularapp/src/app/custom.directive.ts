import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private el:ElementRef,private render: Renderer2) {
    // el.nativeElement.style.text-shadow="5px 4px 3px";\
    render.setStyle(el.nativeElement,'text-shadow','5px 4px 3px');
  }

}
