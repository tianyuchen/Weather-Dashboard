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

  userInput: string = '';
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
    this.setupCitySearch();
    2;
  }

  setupCitySearch() {
    const search$: Observable<string[]> = fromEvent<Event>(
      this.cityInput.nativeElement,
      'keyup'
    ).pipe(
      map((event: Event) => (event.target! as HTMLInputElement).value),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((cityName) => (cityName ? this.getCities(cityName) : of([])))
    );

    search$.subscribe((data) => {
      this.searchedCities = data;
    });
  }

  getCities(city: string): Observable<string[]> {
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
