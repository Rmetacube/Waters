import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[cardBackColor]'
})
export class CardColorDirective {

  @Input() public cardId: number;

  @HostBinding('style.background') bgColor;

  constructor() {
   }

   ngOnInit() {

    let cardColor = [
      {cardId: 1, bgColor: '#979797'},
      {cardId: 2, bgColor: '#3b86ff'},
      {cardId: 3, bgColor: '#8b68ee'},
      {cardId: 4, bgColor: '#ee3541'}
    ];
  
    cardColor.filter(element => {
      if(element.cardId ===  this.cardId)
      {
        this.bgColor = element.bgColor;
      }
    });
     
   }

}
