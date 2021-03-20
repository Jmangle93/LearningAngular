import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { WeatherComponent } from './weather/weather.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; 


// https://angular.io/guide/router
const routes: Routes = [
  { path: '', redirectTo: '/homepage-component', pathMatch: 'full' },
  { path: 'homepage-component', component: HomepageComponent },
  { path: 'weather-component', component: WeatherComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
