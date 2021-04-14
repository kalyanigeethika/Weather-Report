import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WeatherListComponent} from './weather-list/weather-list.component';
import {WeatherDetailComponent} from './weather-detail/weather-detail.component'

const routes: Routes = [
  
  {path: 'weather-list', component: WeatherListComponent},
  {
    path: 'weather-detail/:name',
    component: WeatherDetailComponent
  },
  {path: '', redirectTo: '/weather-list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
