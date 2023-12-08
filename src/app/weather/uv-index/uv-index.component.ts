import {
  Component,
  OnChanges,
  OnInit,
  Input,
  SimpleChanges,
} from '@angular/core';
import { PieChart } from 'chartist';

@Component({
  selector: 'app-uv-index',
  templateUrl: './uv-index.component.html',
  styleUrls: ['./uv-index.component.scss'],
})
export class UvIndexComponent implements OnInit, OnChanges {
  @Input() uvIndex: number = -1;
  uvLevel: string = '';

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.getUVLevel(this.uvIndex);
    this.drawChart(this.uvIndex);
  }

  getUVLevel(index: number) {
    if (index >= 0 && index < 3) {
      this.uvLevel = 'Low';
    } else if (index >= 3 && index < 6) {
      this.uvLevel = 'Moderate';
    } else if (index >= 6 && index < 8) {
      this.uvLevel = 'High';
    } else if (index >= 8 && index < 11) {
      this.uvLevel = 'Very High';
    } else if (index >= 11) {
      this.uvLevel = 'Extreme';
    }
  }

  drawChart(index: number) {
    new PieChart(
      '#chart',
      {
        series: [index, 12 - index],
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
