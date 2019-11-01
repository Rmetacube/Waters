import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PageOneComponent } from './page-one.component';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { CardFeature } from '../cardFeatures';

@Component({
  selector: 'app-card',
  template:  `
        <div> 
        <h1 class="card-name">{{card.name}}</h1>
        <h1 *ngIf="!card.isBought" class="card-amount">{{card.amount}}</h1>
        </div>
  `
})

class CardStubComponent {
  @Input() card: CardFeature;
}

describe('PageOneComponent', () => {
  let component: PageOneComponent;
  let fixture: ComponentFixture<PageOneComponent>;
  let expectedStarterCards: CardFeature[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOneComponent, CardStubComponent ],
      imports: [ HttpClientTestingModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOneComponent);
    component = fixture.componentInstance;

    expectedStarterCards = [{
      id: 1, amount: '$1', 
      name:'STARTER', description: 'Starter features for your business to grow.',
      isBought: false, cardCategory: 1
    }, {
      id: 2, amount: '$20', 
      name:'REGULAR', description: 'Regular features for your business to grow.',
      isBought: false, cardCategory: 1
    }];
    component.starterCards = expectedStarterCards;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check card name loaded on page one component', () => {
    let cardComponent: CardStubComponent;
    cardComponent = new CardStubComponent;
    cardComponent.card =  expectedStarterCards[0];
    fixture.detectChanges();
    const el: HTMLElement = fixture.debugElement.nativeElement;
    const cardName = el.querySelector('.card-name');
    expect(cardName.textContent).toBe("STARTER");
  });

});
