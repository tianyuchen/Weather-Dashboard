import {
  Component,
  OnChanges,
  OnInit,
  Input,
  SimpleChanges,
} from '@angular/core';
import { PieChart } from 'chartist';
// import * as Chartist from 'chartist';

@Component({
  selector: 'app-uv-index',
  templateUrl: './uv-index.component.html',
  styleUrls: ['./uv-index.component.scss'],
})
export class UvIndexComponent implements OnInit, OnChanges {
  @Input() uvIndex: number = -1;

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    new PieChart(
      '#chart',
      {
        series: [this.uvIndex, 12 - this.uvIndex],
      },
      {
        donut: true,
        donutWidth: 60,
        startAngle: 270,
        total: 24,
        showLabel: false,
      }
    );
  }
}
