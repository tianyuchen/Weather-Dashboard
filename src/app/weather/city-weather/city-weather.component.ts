import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { switchMap, shareReplay, tap } from 'rxjs/operators';
import { Observable, of, ReplaySubject, Subject } from 'rxjs';

import { Weather } from '../../shared/weather.model';
import { WeatherService } from '../../../services/weather.service';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.scss'],
})
export class CityWeatherComponent implements OnChanges {
  @Input() city: string = '';

  city$ = new ReplaySubject<string>();
  cityWeather$: Observable<Weather | undefined> = this.city$.pipe(
    switchMap((name) => {
      if (!name) return of(undefined);
      return this.weatherService.getWeather(name);
    }),
    shareReplay(),
    tap(console.log)
  );

  constructor(private weatherService: WeatherService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['city']) {
      this.city$.next(this.city);
    }
  }
}
