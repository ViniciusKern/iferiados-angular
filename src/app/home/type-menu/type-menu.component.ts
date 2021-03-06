import { Component, EventEmitter, Input, Output } from '@angular/core';

import { HolidayType } from 'src/app/shared/holiday-type/holiday-type';

@Component({
  selector: 'app-type-menu',
  templateUrl: './type-menu.component.html',
  styleUrls: ['./type-menu.component.scss'],
})
export class TypeMenuComponent {
  @Input() types: HolidayType[];
  @Input() selected: HolidayType;
  @Output() selectedChange = new EventEmitter<HolidayType>();

  selectType(type: HolidayType) {
    this.selected = type;
    this.selectedChange.emit(this.selected);
  }
}
