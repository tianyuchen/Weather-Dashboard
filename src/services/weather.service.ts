import { ErrorHandler, Injectable } from '@angular/core';
import { Observable, map, catchError, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Weather } from '../app/shared/weather.model';
import { CurrentWeatherResponse } from '../app/weather/types/current-response';

declare interface WeatherApiError {
  error: { message: string };
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly weatherBaseUrl =
    'https://api.openweathermap.org/data/2.5/weather?q=';
  private readonly appID = environment.openWeatherApiKey;

  constructor(public http: HttpClient) {}

  getWeather(
    city: string,
    metric: 'metric' | 'imperial' = 'metric'
  ): Observable<Weather | undefined> {
    return this.http
      .get<CurrentWeatherResponse>(
        `${this.weatherBaseUrl}${city}&units=${metric}&APPID=${this.appID}`
      )
      .pipe(
        map((res: CurrentWeatherResponse) => {
          return {
            city: res.name,
            currTemp: Math.round(res.main.temp),
            type: res.weather[0].main.toLowerCase(),
            minTemp: Math.round(res.main.temp_min),
            maxTemp: Math.round(res.main.temp_max),
            feelsLike: Math.round(res.main.feels_like),
            uvIndex: 0,
          };
        }),
        catchError((err) =>
          throwError(() => {
            if (typeof err === 'string') {
              return err;
            }
            if (err instanceof Error) {
              return err.message;
            }
            if (typeof err === 'object') {
              return (err as WeatherApiError).error.message;
            }
            return 'Unknown error';
          })
        )
      );
  }
}
