import { Injectable } from '@angular/core';
import { Observable, first, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Weather } from './weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private weatherData: Weather[] = [
    {
      city: 'Zurich',
      currTemp: 8,
      type: 'cloudy',
      minTemp: 2,
      maxTemp: 9,
      uvIndex: 2,
    },
    {
      city: 'Paris',
      currTemp: 10,
      type: 'rainy',
      minTemp: 3,
      maxTemp: 12,
      uvIndex: 4,
    },
    {
      city: 'Wuhan',
      currTemp: 22,
      type: 'sunny',
      minTemp: 18,
      maxTemp: 25,
      uvIndex: 8,
    },
    {
      city: 'Adliswil',
      currTemp: 4,
      type: 'snowy',
      minTemp: 0,
      maxTemp: 7,
      uvIndex: 0,
    },
  ];

  private readonly baseURL =
    'https://api.openweathermap.org/data/2.5/weather?q=';
  private readonly appID = environment.appID;

  constructor(public http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    return this.http
      .get(`${this.baseURL}${city}&APPID=${this.appID}`)
      .pipe(first());
  }

  getWeatherData(cityName: string): Observable<Weather | undefined> {
    return of(this.weatherData).pipe(
      map((weatherList) =>
        weatherList.find((weather) => weather.city === cityName)
      )
    );
  }
}
