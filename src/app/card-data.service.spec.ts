import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CardDataService } from './card-data.service';

describe('CardDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: CardDataService = TestBed.get(CardDataService);
    expect(service).toBeTruthy();
  });
});
