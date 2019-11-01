import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CardFeature } from '../cardFeatures';
import { CardService } from './card.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: CardFeature;
  @Input() boughtCardId: number;
  clickEventSubscription: Subscription;
  updateCardSubscription: Subscription;

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.clickEventSubscription = this.cardService.clickEvent.subscribe((id)=>{
        this.boughtCardId = id;
    }) 
  }

  BuyClick(cardId) {
    this.card.isBought = true;
    this.updateCardSubscription = this.cardService.updateCard(this.card).subscribe((data) => {  
      this.boughtCardId = cardId;
      this.cardService.sendBoughtId(this.boughtCardId);  
    })
  }

  CancelClick() {
    this.card.isBought = false;
    this.updateCardSubscription = this.cardService.updateCard(this.card).subscribe((data) => {
      this.cardService.sendBoughtId(null);
    })
  }

  ngOnDestroy(){
    this.clickEventSubscription.unsubscribe();
    if(this.updateCardSubscription) this.updateCardSubscription.unsubscribe();
  }

}
