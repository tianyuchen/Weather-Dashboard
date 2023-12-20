import { Component, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-geocoder-autocomplete',
  templateUrl: './geocoder-autocomplete.component.html',
  styleUrls: ['./geocoder-autocomplete.component.scss'],
})
export class GeocoderAutocompleteComponent {
  @Output() setcityEvent = new EventEmitter<string>();

  onPlaceSelected(place: any): void {
    this.setcityEvent.emit(place.properties.address_line1);
  }
}
