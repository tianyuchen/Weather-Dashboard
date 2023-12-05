import { Component, OnInit } from '@angular/core';
import { PieChart } from 'chartist';

@Component({
  selector: 'app-uv-index',
  templateUrl: './uv-index.component.html',
  styleUrls: ['./uv-index.component.scss'],
})
export class UvIndexComponent implements OnInit {
  ngOnInit(): void {
    new PieChart(
      '#chart',
      {
        series: [4, 8],
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
