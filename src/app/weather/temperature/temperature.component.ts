import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from '../weather.model';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent {
  weathers: Weather[];

  constructor(private weatherService: WeatherService) {
    this.weathers = this.weatherService.getWeatherData("");
  }
}
