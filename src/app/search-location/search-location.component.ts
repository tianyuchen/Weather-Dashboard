import {
  Component,
  ElementRef,
  EventEmitter,
  AfterViewInit,
  Output,
  ViewChild,
} from '@angular/core';
import { of, fromEvent, Observable } from 'rxjs';
import {
  debounceTime,
  map,
  distinctUntilChanged,
  switchMap,
  tap,
} from 'rxjs/operators';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.scss'],
})
export class SearchLocationComponent implements AfterViewInit {
  @ViewChild('citySearchInput') cityInput!: ElementRef;
  @Output() setcityEvent = new EventEmitter<{ city: string }>();

  cities: string[] = [];
  searchedCities: any = [];

  constructor() {
    this.cities = [
      'Zurich',
      'Paris',
      'Wuhan',
      'London',
      'Beijing',
      'New York',
      'Shang hai',
      'Adliswil',
      'Lucerne',
      'Klettgau',
    ];
  }

  ngAfterViewInit(): void {
    this.citySearch();
  }

  citySearch() {
    const search$ = fromEvent(this.cityInput.nativeElement, 'keyup').pipe(
      map((event: any) => event.target.value),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((cityName) =>
        cityName ? this.getCity(cityName) : of<any>(this.cities)
      )
    );

    search$.subscribe((data) => {
      this.searchedCities = data;
    });
  }

  getCity(city: string): Observable<any> {
    return of(this.filterCities(city));
  }

  filterCities(city: string) {
    return this.cities.filter(
      (val) => val.toLowerCase().includes(city.toLowerCase()) == true
    );
  }

  setCityName(city: string) {
    this.searchedCities = this.filterCities(city);
    this.setcityEvent.emit({ city });
    this.cityInput.nativeElement.value = city;
  }
}
