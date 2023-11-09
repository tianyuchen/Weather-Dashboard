import { Injectable } from '@angular/core';
import { Weather } from './weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private weatherData: Weather[] = [
    {
      city: 'Zurich', currTemp: 8,
      weatherType: 'Cloudy', minTemp: 2, maxTemp: 9,
    }
    // new Weather('Paris', 10, 'Sunny', 3, 12),
  ];

  constructor() { }

  getWeatherData(cityName: string) {
    return this.weatherData;
  }


}
