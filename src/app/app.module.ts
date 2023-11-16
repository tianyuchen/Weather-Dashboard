import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchLocationComponent } from './search-location/search-location.component';
import { TemperatureComponent } from './weather/temperature/temperature.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchLocationComponent,
    TemperatureComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
