import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CardService } from './card.service';
import { CardColorDirective } from './Directive/card-color.directive';
import { CardFeature } from '../cardFeatures';
import { of } from 'rxjs';

describe('CardService', () => {

  let httpClientSpy: { get: jasmine.Spy, put: jasmine.Spy };
  let cardService: CardService;
  
  const card: CardFeature =   {
    id: 1, amount: '$1', 
    name:'STARTER', description: 'Starter features for your business to grow.',
    isBought: false, cardCategory: 1
  };

  const expectedCards: CardFeature[] =   [
    {  id: 1, amount: '$1', name:'STARTER', description: 'Starter features for your business to grow.',   isBought: false, cardCategory: 1},
    {  id: 2, amount: '$25', name:'REGULAR', description: 'Regular features for your business to grow.',  isBought: false, cardCategory: 1},
    {  id: 3, amount: '$75', name:'PROFESSIONAL', description: 'Professional features for your business to grow.',  isBought: false, cardCategory: 2},
    {  id: 4, amount: '$115', name:'ULTIMATE', description: 'The ultimate set of features for your business to grow.', isBought: false, cardCategory: 2} 
  ];

  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    declarations: [ CardColorDirective ]
  }));

  beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get','put']);
    cardService = new CardService(<any> httpClientSpy);
  });

  it('should be created', () => {
    const service: CardService = TestBed.get(CardService);
    expect(service).toBeTruthy();
  });

  it('should have get card data', () => {
    const service: CardService = TestBed.get(CardService);
    expect(service.getData).toBeTruthy();
  });

  it('should return expected card (HttpClient called once)', () => {
    
    httpClientSpy.get.and.returnValue(of(expectedCards));
  
    cardService.getData().subscribe(
      data => expect(data).toEqual(expectedCards, 'expected card'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should have update card data', () => { 
    card.isBought = true;
    httpClientSpy.put.and.returnValue(of(card));

    cardService.updateCard(card).subscribe((data) => {
        expect(data).toEqual(card);
    });
  });

});
