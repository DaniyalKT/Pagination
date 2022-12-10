import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSetClass]'
})
export class SetClassDirective {
@Input('appSetClass') set className(classObj: any){
  
  for(let key of classObj){
    if(classObj[key] == true){
      this.elementRef.nativeElement.classList.add(key)
    }else{
      this.elementRef.nativeElement.classList.remove(key)

    }
  }
}

  constructor(private elementRef: ElementRef) { }

}
