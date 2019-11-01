import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { CardComponent } from './card/card.component';
import { CardColorDirective } from './card/directive/card-color.directive';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { CardDataService } from './card-data.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent,
    CardComponent,
    CardColorDirective,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    InMemoryWebApiModule.forRoot(CardDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
