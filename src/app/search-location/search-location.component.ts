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
  shareReplay,
} from 'rxjs/operators';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.scss'],
})
export class SearchLocationComponent implements AfterViewInit {
  @ViewChild('citySearchInput') cityInput!: ElementRef;
  @Output() setcityEvent = new EventEmitter<string>();

  userInput: string = '';
  cities: string[] = [];

  searchedCities$: Observable<string[]> = of([]);

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
  }

  setupCitySearch() {
    this.searchedCities$ = fromEvent<Event>(
      this.cityInput.nativeElement,
      'keyup'
    ).pipe(
      map((event: Event) => (event.target! as HTMLInputElement).value),
      map((query) => query.trim()),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((cityName) => (cityName ? this.getCities(cityName) : of([]))),
      shareReplay()
    );
  }

  getCities(city: string): Observable<string[]> {
    return of(this.filterCities(city));
  }

  filterCities(city: string) {
    return this.cities.filter(
      (val) => val.toLowerCase().includes(city.toLowerCase()) == true
    );
  }

  selectCity(city: string) {
    this.setcityEvent.emit(city);
    this.cityInput.nativeElement.value = '';
  }
}
