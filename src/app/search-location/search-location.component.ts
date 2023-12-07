import {
  Component,
  ElementRef,
  EventEmitter,
  AfterViewInit,
  Output,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { of, fromEvent, Observable, merge } from 'rxjs';
import {
  debounceTime,
  map,
  distinctUntilChanged,
  switchMap,
  shareReplay,
} from 'rxjs/operators';
import { LocalStorageService } from '../shared/local-storage.service';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.scss'],
})
export class SearchLocationComponent implements AfterViewInit, OnDestroy {
  @ViewChild('citySearchInput') cityInput!: ElementRef;
  @Output() setcityEvent = new EventEmitter<string>();

  userInput: string = '';
  cities: string[] = [];
  searchHistory: string[] = [];

  searchedCities$: Observable<string[]> = of([]);
  searchedHistory$: Observable<string[]> = of([]);
  mergedResult$: Observable<string[]> = of([]);

  constructor(private localStorageService: LocalStorageService) {
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

  ngOnDestroy(): void {
    this.localStorageService.clearData();
  }

  setupCitySearch() {
    this.searchedHistory$ = fromEvent<Event>(
      this.cityInput.nativeElement,
      'click'
    ).pipe(
      map((event: Event) =>
        JSON.parse(this.localStorageService.getData('search-history') || '[]')
      )
    );

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

    this.mergedResult$ = merge(this.searchedHistory$, this.searchedCities$);
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

    this.searchHistory = JSON.parse(
      this.localStorageService.getData('search-history') || '[]'
    );
    if (this.searchHistory.indexOf(city) == -1) {
      this.searchHistory.push(city);
      this.localStorageService.setItem(
        'search-history',
        JSON.stringify(this.searchHistory)
      );
    }
  }
}
