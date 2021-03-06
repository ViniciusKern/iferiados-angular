import { Component, OnInit } from '@angular/core';

import { HolidayType } from '../shared/holiday-type/holiday-type';
import { TYPES, TYPE_IDS } from '../shared/holiday-type/holiday-type';
import { HolidayService } from '../shared/holiday/holiday.service';
import { Holiday } from '../shared/holiday/holiday';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  types: HolidayType[];
  selected: HolidayType;

  holidays: Holiday[];
  filteredHolidays: Holiday[];

  constructor(private holidayService: HolidayService) {}

  ngOnInit(): void {
    this.types = TYPES;
    this.selected = this.types[0];

    this.holidayService.getHolidays().subscribe((holidays) => {
      this.holidays = holidays;
      this.filteredHolidays = holidays;
    });
  }

  filterHolidays() {
    this.filteredHolidays = this.holidays.filter(
      (h) => this.selected.id == TYPE_IDS.ALL || h.typeId == this.selected.id
    );
  }
}
