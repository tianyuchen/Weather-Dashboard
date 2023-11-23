import { Injectable } from '@angular/core';
import { Weather } from './weather.model';
import { Observable, filter, map, of } from 'rxjs';

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
    },
    {
      city: 'Paris',
      currTemp: 10,
      type: 'rainy',
      minTemp: 3,
      maxTemp: 12,
    },
    {
      city: 'Wuhan',
      currTemp: 22,
      type: 'sunny',
      minTemp: 18,
      maxTemp: 25,
    },
  ];

  constructor() {}

  getWeatherData(cityName: string): Observable<Weather | undefined> {
    return of(this.weatherData).pipe(
      map((weatherList) =>
        weatherList.find((weather) => weather.city === cityName)
      )
    );
  }
}
