import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from '../weather.model';
import { switchMap, shareReplay } from 'rxjs/operators';
import { Observable, of, ReplaySubject, Subject } from 'rxjs';

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
      return this.weatherService.getWeatherData(name);
    }),
    shareReplay()
  );

  constructor(private weatherService: WeatherService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['city']) {
      this.city$.next(this.city);
    }
  }
}