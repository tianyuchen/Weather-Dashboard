import { Component, Input, OnInit } from '@angular/core';

import { Weather } from '../../shared/weather.model';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss'],
})
export class TemperatureComponent implements OnInit {
  @Input() weather!: Weather;

  constructor() {}

  ngOnInit(): void {}
}
