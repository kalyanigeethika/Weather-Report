import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private _weatherUrl1 = "http://api.openweathermap.org/data/2.5/weather?q=";
  private _weatherUrl2 = ",europe&appid=3d8b309701a13f65b660fa2c64cdc517";
  private _forecastUrl = "http://api.openweathermap.org/data/2.5/forecast?q=";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }
  getWeather(): Observable<any> {
    const weatherCity1 = this.http.get(this._weatherUrl1 + 'London' + this._weatherUrl2);
    const weatherCity2 = this.http.get(this._weatherUrl1 + 'Paris' + this._weatherUrl2);
    const weatherCity3 = this.http.get(this._weatherUrl1 + 'Amsterdam' + this._weatherUrl2);
    const weatherCity4 = this.http.get(this._weatherUrl1 + 'Berlin' + this._weatherUrl2);
    const weatherCity5 = this.http.get(this._weatherUrl1 + 'Luton' + this._weatherUrl2);
    return forkJoin([weatherCity1, weatherCity2, weatherCity3, weatherCity4,weatherCity5]);
  }  
  getForecast(name: string): Observable<any> {
    return this.http.get(`${this._forecastUrl}${name}&appid=3d8b309701a13f65b660fa2c64cdc517`);
  } 
}
