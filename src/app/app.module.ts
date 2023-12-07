import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchLocationComponent } from './search-location/search-location.component';
import { TemperatureComponent } from './weather/temperature/temperature.component';
import { HomeComponent } from './home/home.component';
import { SunriseSunsetComponent } from './weather/sunrise-sunset/sunrise-sunset.component';
import { UvIndexComponent } from './weather/uv-index/uv-index.component';
import { CityWeatherComponent } from './weather/city-weather/city-weather.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
