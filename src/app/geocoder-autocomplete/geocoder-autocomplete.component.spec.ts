import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeocoderAutocompleteComponent } from './geocoder-autocomplete.component';

describe('GeocoderAutocompleteComponent', () => {
  let component: GeocoderAutocompleteComponent;
  let fixture: ComponentFixture<GeocoderAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeocoderAutocompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeocoderAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
