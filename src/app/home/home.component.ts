import { Component, OnInit } from '@angular/core';

import { LocalStorageService } from '../shared/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  city: string = 'Zurich';
  lastSearchedCity: string = '';

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    if (this.getLastSearchedCity()) {
      this.city = this.getLastSearchedCity()!;
    }
  }

  selectCity(cityName: string) {
    this.city = cityName;
  }

  getLastSearchedCity() {
    return this.localStorageService.getData('last-search');
  }
}
