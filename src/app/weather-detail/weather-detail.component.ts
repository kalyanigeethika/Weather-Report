import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WeatherService } from './../services/weather.service';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {
  name!: string;
  weathercity: any =[];
  constructor(private route: ActivatedRoute,private ws:WeatherService) { }

  ngOnInit()
  {
    this.name = this.route.snapshot.params['name'];
    this.ws.getForecast(this.name).subscribe(
      (weather) => {
       for(var i=0;i<=weather.list.length;i++)
       {
         if(weather.list[i].dt_txt.endsWith("09:00:00"))
         {
           this.weathercity.push(weather.list[i]);
         }
       }
      },
      err => console.log(err)

    );
  }

}
