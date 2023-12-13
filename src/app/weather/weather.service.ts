import { AfterViewInit, Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Weather } from './weather.model';
import { CurrentWeatherResponse } from './types/current-response';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly baseURL =
    'https://api.openweathermap.org/data/2.5/weather?q=';
  private readonly appID = 'af46b8baec3948745c16b4ddaa9ed681';

  constructor(public http: HttpClient) {}

  getWeather(
    city: string,
    metric: 'metric' | 'imperial' = 'metric'
  ): Observable<Weather> {
    return this.http
      .get<CurrentWeatherResponse>(
        `${this.baseURL}${city}&units=${metric}&APPID=${this.appID}`
      )
      .pipe(
        map((res: CurrentWeatherResponse) => {
          return {
            city: res.name,
            currTemp: Math.round(res.main.temp),
            type: res.weather[0].main,
            minTemp: Math.round(res.main.temp_min),
            maxTemp: Math.round(res.main.temp_max),
            feelsLike: Math.round(res.main.feels_like),
            uvIndex: 0,
          };
        })
      );
  }
}
