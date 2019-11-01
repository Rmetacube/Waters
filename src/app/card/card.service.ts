import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Subject, throwError, Observable } from 'rxjs';
import { environment} from '../../environments/environment';
import { CardFeature } from '../cardFeatures';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };

  clickEvent = new Subject<number>();
  apiUrl:string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  private handleError(error: any) {
    console.error(error);                                       
    return throwError(error);
  }

  public sendBoughtId(value: number) {
    this.clickEvent.next(value); 
  }
  
  public getData():Observable <CardFeature[]> { 
    return this.httpClient.get<CardFeature[]>(this.apiUrl + 'cards');
  }

  public updateCard(card:CardFeature){
    return this.httpClient.put(`${this.apiUrl + 'cards'}/${card.id}`,card,this.httpOptions).pipe(
      map(() => card),
      catchError(this.handleError));
  }
  
}
