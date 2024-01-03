import { Component, Input } from '@angular/core';
import { WeatherService } from 'src/services/weather.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent {
  @Input() message: string | undefined | null = '';
  @Input() action = 'GOT IT';

  constructor(private weatherService: WeatherService) {}
}
