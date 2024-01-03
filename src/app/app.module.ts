import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GeoapifyGeocoderAutocompleteModule } from '@geoapify/angular-geocoder-autocomplete';

import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchLocationComponent } from './search-location/search-location.component';
import { TemperatureComponent } from './weather/temperature/temperature.component';
import { HomeComponent } from './home/home.component';
import { SunriseSunsetComponent } from './weather/sunrise-sunset/sunrise-sunset.component';
import { UvIndexComponent } from './weather/uv-index/uv-index.component';
import { CityWeatherComponent } from './weather/city-weather/city-weather.component';
import { GeocoderAutocompleteComponent } from './geocoder-autocomplete/geocoder-autocomplete.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchLocationComponent,
    TemperatureComponent,
    HomeComponent,
    SunriseSunsetComponent,
    UvIndexComponent,
    CityWeatherComponent,
    GeocoderAutocompleteComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GeoapifyGeocoderAutocompleteModule.withConfig(environment.geoapifyApiKey),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
