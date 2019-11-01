import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CardComponent } from './card.component';
import { CardColorDirective } from './Directive/card-color.directive';
import { CardFeature } from '../cardFeatures';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  const card: CardFeature =   {
    id: 1, amount: '$1', 
    name:'STARTER', description: 'Starter features for your business to grow.',
    isBought: false, cardCategory: 1
  };    

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent, CardColorDirective ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.card = card;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check buy click', () => {
    fixture.detectChanges();
    component.card.isBought = false;
    fixture.detectChanges();
    const el: HTMLElement = fixture.debugElement.nativeElement;
    const buttons: NodeListOf<HTMLButtonElement> = el.querySelectorAll('button');
    const buyButton = buttons[0];
    buyButton.click();
    expect(component.card.isBought).toBe(true);
  });

  it('should check cancel click', () => {
    fixture.detectChanges();
    component.card.isBought = true;
    fixture.detectChanges();
    const el: HTMLElement = fixture.debugElement.nativeElement;
    const buttons: NodeListOf<HTMLButtonElement> = el.querySelectorAll('button');
    const cancelButton = buttons[0];
    cancelButton.click();
    expect(component.card.isBought).toBe(false);
  });


});
