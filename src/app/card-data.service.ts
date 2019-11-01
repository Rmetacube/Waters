import { Injectable } from '@angular/core';
import { CardFeature } from './cardFeatures';
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class CardDataService implements InMemoryDbService {

  constructor() { }

  createDb(){

    let  cards: CardFeature[] =  [
      {  id: 1, amount: '$1', name:'STARTER', description: 'Starter features for your business to grow.',   isBought: false, cardCategory: 1},
      {  id: 2, amount: '$25', name:'REGULAR', description: 'Regular features for your business to grow.',  isBought: false, cardCategory: 1},
      {  id: 3, amount: '$75', name:'PROFESSIONAL', description: 'Professional features for your business to grow.',  isBought: false, cardCategory: 2},
      {  id: 4, amount: '$115', name:'ULTIMATE', description: 'The ultimate set of features for your business to grow.', isBought: false, cardCategory: 2}
     ];

     return {cards};

  }
}
