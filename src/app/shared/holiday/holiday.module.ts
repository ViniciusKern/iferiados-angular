import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HolidayCardComponent } from './holiday-card/holiday-card.component';
import { CalendarComponent } from './holiday-card/calendar/calendar.component';
import { NoHolidaysCardComponent } from './no-holidays-card/no-holidays-card.component';

@NgModule({
  declarations: [
    HolidayCardComponent,
    CalendarComponent,
    NoHolidaysCardComponent,
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [HolidayCardComponent, NoHolidaysCardComponent],
})
export class HolidayModule {}
