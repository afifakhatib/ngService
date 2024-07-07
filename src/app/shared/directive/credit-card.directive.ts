import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective {

  constructor(
    private eleRef : ElementRef,
    private render : Renderer2,
  ) { }

      @HostListener('keyup' , ['$event'])
        onKeyUp(eve : Event){
           let inputControl = eve.target as HTMLInputElement;
           let val = inputControl.value as string;
          val = val.replace(/\s+/g, '')
          
           inputControl.value = val
         }
}
