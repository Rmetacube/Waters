import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';


const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/one'}, 	
  { path: 'one', component: PageOneComponent},
  { path: 'two', component: PageTwoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
