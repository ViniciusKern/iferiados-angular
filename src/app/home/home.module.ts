import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HolidayModule } from '../shared/holiday/holiday.module';
import { LoadingIndicatorModule } from '../shared/loading-indicator/loading-indicator.module';
import { HomeComponent } from './home.component';
import { TypeMenuComponent } from './type-menu/type-menu.component';

@NgModule({
  declarations: [HomeComponent, TypeMenuComponent],
  imports: [CommonModule, HolidayModule, LoadingIndicatorModule],
  exports: [HomeComponent],
})
export class HomeModule {}
