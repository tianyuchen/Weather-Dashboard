import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from '../weather.model';
import { Subscription, Observable, of } from 'rxjs';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss'],
})
export class TemperatureComponent implements OnChanges, OnInit {
  cityWeather$: Observable<Weather | undefined> = of(undefined);
  @Input() city: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.cityWeather$ = this.weatherService.getWeatherData('Paris');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getWeatherByCity();
  }

  getWeatherByCity() {
    this.cityWeather$ = this.weatherService.getWeatherData(this.city);
  }
}
