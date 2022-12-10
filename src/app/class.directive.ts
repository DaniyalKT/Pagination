import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
@Input() set backgroundColor(Color: string){
  this.elementRef.nativeElement.style.backgroundColor = Color
}


// @HostBinding('style.backgroundColor') backgroundColor: string = 'red'
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    //this.elementRef.nativeElement.style.backgroundColor = 'red'
     //this.renderer.setStyle(elementRef.nativeElement, 'background-color', 'green')
   }

  //  @HostListener('mouseenter') onMouseOver(){
  //   this.backgroundColor = 'red'
  //  // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green')
  //  }

  //  @HostListener('mouseleave') onMouseOut(){
  //   //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red')
  //   this.backgroundColor = 'green'
  //  }
}
