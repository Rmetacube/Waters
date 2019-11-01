import { Component, OnInit } from '@angular/core';
import { CardFeature } from '../cardFeatures';
import { CardService } from '../card/card.service';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['../app.component.scss']
})
export class PageTwoComponent implements OnInit {

  professionalCards: CardFeature[] = [];
  boughtCardId: number;
  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cardService.getData().subscribe((cardFeatures: CardFeature[]) => {
      cardFeatures.map((card) => {
          if(card.isBought){
            this.boughtCardId = card.id;
          }
          if(card.cardCategory === 2)
          {
            this.professionalCards.push(card);
          }
      })
  })
  }

}
