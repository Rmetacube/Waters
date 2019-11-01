import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PageTwoComponent } from './page-two.component';
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

describe('PageTwoComponent', () => {
  let component: PageTwoComponent;
  let fixture: ComponentFixture<PageTwoComponent>;
  let expectedCards: CardFeature[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTwoComponent, CardStubComponent ],
      imports: [ HttpClientTestingModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTwoComponent);
    component = fixture.componentInstance;
    expectedCards = [
      {  id: 3, amount: '$75', name:'PROFESSIONAL', description: 'Professional features for your business to grow.',  isBought: false, cardCategory: 2},
      {  id: 4, amount: '$115', name:'ULTIMATE', description: 'The ultimate set of features for your business to grow.', isBought: false, cardCategory: 2}
    ];
    component.professionalCards = expectedCards;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check card data loaded on page two component', () => {
    let cardComponent: CardStubComponent;
    cardComponent = new CardStubComponent;
    cardComponent.card =  expectedCards[0];
    fixture.detectChanges();
    const el: HTMLElement = fixture.debugElement.nativeElement;
    const cardName = el.querySelector('.card-name');
    expect(cardName.textContent).toBe("PROFESSIONAL");
  });

});
