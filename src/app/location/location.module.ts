import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SearchBarComponent } from '../shared/search-bar/search-bar.component';
import { FilterCityPipe } from './cities/filter-city.pipe';
import { StatesComponent } from './states/states.component';
import { CitiesComponent } from './cities/cities.component';
import { LoadingIndicatorModule } from '../shared/loading-indicator/loading-indicator.module';

@NgModule({
  declarations: [
    StatesComponent,
    CitiesComponent,
    SearchBarComponent,
    FilterCityPipe,
  ],
  imports: [CommonModule, RouterModule, LoadingIndicatorModule],
  exports: [StatesComponent, CitiesComponent],
})
export class LocationModule {
  constructor() {}
}
