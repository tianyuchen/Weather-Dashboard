import { Component, OnInit } from '@angular/core';
import { PieChart } from 'chartist';

@Component({
  selector: 'app-sunrise-sunset',
  templateUrl: './sunrise-sunset.component.html',
  styleUrls: ['./sunrise-sunset.component.scss'],
})
export class SunriseSunsetComponent implements OnInit {
  ngOnInit(): void {
    new PieChart(
      '#chart',
      {
        series: [20, 10, 30, 40],
      },
      {
        donut: true,
        donutWidth: 60,
        startAngle: 270,
        total: 200,
        showLabel: false,
      }
    );
  }
}
