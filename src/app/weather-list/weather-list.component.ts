import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../services/weather.service';
@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit{
  weathercity1: any ={};
  weathercity2: any ={};
  weathercity3: any ={};
  weathercity4: any ={};
  weathercity5: any ={};
  isLoadingResults = true;
  date: any = new Date();
  gsDayNames: any = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];  
  gsMonthNames: any = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  curDate: any = (new Date().getDate());
  curDay: any = this.gsDayNames[(new Date().getDay())];  
  curMonth: any = this.gsMonthNames[(new Date().getMonth())]; 
  curYear: any = new Date().getFullYear();
  constructor(private ws: WeatherService) { }

  ngOnInit() {
    this.getWeather();
  }
  getWeather()
  {
    this.ws.getWeather().subscribe(
      (weathers: any) => 
      {
        this.weathercity1 = weathers[0];
        this.weathercity2 = weathers[1];
        this.weathercity3 = weathers[2];
        this.weathercity4 = weathers[3];
        this.weathercity5 = weathers[4];
      },           
      err => {
        console.log(err);
        this.isLoadingResults = false;
      });
    
  }
}
