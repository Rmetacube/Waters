import { Component, OnInit } from '@angular/core';
import { CardFeature } from '../cardFeatures';
import { CardService } from '../card/card.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['../app.component.scss']
})
export class PageOneComponent implements OnInit {

  starterCards: CardFeature[] = [];
  boughtCardId: number;
  constructor(private cardServive: CardService) { }

  ngOnInit() {
    this.cardServive.getData().subscribe((cardFeatures: CardFeature[]) => {
      cardFeatures.map((card) => {
        if (card.isBought) {
          this.boughtCardId = card.id;
        }
        if (card.cardCategory === 1) {
          this.starterCards.push(card);
        }
      })
    })
  }
}
